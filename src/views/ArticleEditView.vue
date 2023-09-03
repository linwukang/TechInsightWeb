<template>
  <div class="article-edit-view">
    <el-input type="text" v-model="title"/>
    <ArticleEditor :get-content="getContent"></ArticleEditor>
    <el-button @click="submitArticle">
      提交
    </el-button>
  </div>
</template>

<script setup lang="ts">
import ArticleEditor from '@/components/ArticleEditor.vue'
import router from '@/router';
import axios from 'axios'
import {ref} from 'vue'
import Notification from "@/api/Notification";
import {PublishArticleDto} from "@/type/dto/PublishArticleDto";

const content = ref<String>()
const title = ref<String>()

function getContent(_content: String) {
  console.log(_content)
  content.value = _content
}

function submitArticle() {
  axios
      .post('articles/publish-article',
          new PublishArticleDto(
              title.value ?? '',
              content.value ?? '',
              localStorage.getItem("userId") as number,
              []))
      .then(response => {
        if (response.data.succeed) {
          Notification.succeed('发布成功', '您的文章正在审核', 2000)

          router.push(`/article?id=${response.data.articleId}`)
        }
        else {
          Notification.warning('发布失败', response.data.message, 2000)
        }
      })
      .catch(error => {
        console.log(error)

        Notification.warning('发布失败', error.response.data.message, 2000)

      })
}

</script>

<style scoped lang="less">
.article-edit-view {
}
</style>