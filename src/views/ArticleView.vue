<template>
  <div class="article-view">
    <div class="title">
      {{ title }}
    </div>
    <main class="content" v-html="content">
    </main>

    <CommentList :comment-list="commentList"></CommentList>
    
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import CommentList from "@/components/CommentList.vue"
import axios from "axios";

const title = ref('')
const content = ref('')
const route = useRoute()
const articleId = (route.query as any).id

let commentList = [
  {
    id: 1,
    profileUrl: 'https://world.chinadaily.com.cn/img/attachement/jpg/site1/20170302/eca86bd9e2fa1a21c7630b.jpg',
    userHome: '/user-home?userId=222',
    username: 'Trump',
    publishDate: new Date(),
    content: '444444444444444444444444',
    likes: 100,
    dislikes: 10
  },
  {
    id: 1,
    profileUrl: 'https://world.chinadaily.com.cn/img/attachement/jpg/site1/20170302/eca86bd9e2fa1a21c7630b.jpg',
    userHome: '/user-home?userId=222',
    username: 'Trump',
    publishDate: new Date(),
    content: '444444444444444444444444',
    likes: 100,
    dislikes: 10
  },
  {
    id: 1,
    profileUrl: 'https://world.chinadaily.com.cn/img/attachement/jpg/site1/20170302/eca86bd9e2fa1a21c7630b.jpg',
    userHome: '/user-home?userId=222',
    username: 'Trump',
    publishDate: new Date(),
    content: '444444444444444444444444',
    likes: 100,
    dislikes: 10
  },
]

function textRenderer(text: string) {
  return text
    .replace(/\r\n/g, '<br />')
    .replace(/\r/g, '<br />')
    .replace(/\n/g, '<br />')
}

onMounted(() => {
  axios.get('/Article/article', {
    params: {
      id: articleId
    }
  })
  .then(response => {
    console.log(response.data)
    title.value = response.data.title
    content.value = textRenderer(response.data.content)
  })
})

</script>

<style scoped lang="less">
.article-view {
  .title {
    font-size: 45px;
  }
  .content {
    font-size: 20px;
    padding: 30px 20px;
    margin-bottom: 50px;
    border-bottom: 1px #eee solid;
  }
}
</style>