<template>
  <div class="article-view">
    <div class="title">
      {{ title }}
    </div>
    <el-main class="content" v-html="content" />

    <CommentList :comment-list="comments ?? []"></CommentList>

  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

import CommentList from "@/components/CommentList.vue"
import axios from "axios"
import CommentInfo from "@/type/CommentInfo"

const title = ref('')
const content = ref('')
const route = useRoute()
const articleId = (route.query as any).id

let comments = ref<CommentInfo[]>([])

function textRenderer(text: string) {
  return text
  // .replace(/\r\n/g, '<br />')
  // .replace(/\r/g, '<br />')
  // .replace(/\n/g, '<br />')
}

onMounted(() => {
  axios.get('/articles/article/' + articleId)
      .then(response => {
        console.log(response.data)
        title.value = response.data.title
        content.value = textRenderer(response.data.content)
      })

  axios.get('/comments/comment-list/' + articleId, {
    params: {
      pages: 0,
      size: 10
    }
  })
      .then(response => {
        let a = (response.data.comments as any[])
            .map(c => ({...c, publishDate: new Date(c.publishDate as string)}))
            .map(c => CommentInfo.of(c))
        for (let comment of a) {
          console.log(comment)
          comments.value?.push(comment)
        }
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
    width: 100%;
    background-color: #fff;

    /deep/ pre {
      background-color: #eee;
      overflow: scroll;
      padding: 20px 20px;
    }
  }
}
</style>