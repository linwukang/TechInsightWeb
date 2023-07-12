<template>
  <div class="index-view">
    <ArticlePreviewList :article-list="articleList" :load="load"></ArticlePreviewList>
  </div>
</template>

<script setup lang="ts">
import ArticlePreviewList from '@/components/ArticlePreviewList.vue'
import { ref } from 'vue';
import axios from 'axios';
import { ElNotification } from 'element-plus/lib/components/index.js';

const articleList = ref([{
  id: 1,
  title: 'OpenStack Icehouse 部署流程',
  content: '【代码】OpenStack Icehouse 部署流程。',
  url: '/article?id=1',
  publisherId: 1,
  publisherUsername: 'Jmilk',
  publisherHomeUrl: '/user-home?userId=1',
  publisherProfilePictureUrl: ''
}
])
articleList.value = []

const load = function () {
  console.log('load')
  axios
    .get('/Article/load-articles',
      {
        params: {
          userId: localStorage.getItem('userId'),
          startIndex: articleList.value.length,
          count: 10,
        }
      })
    .then(response => {
      let articles = response.data.articles
      for (let article of articles) {
        console.log(article)
        articleList.value.push({
          ...article
        })
      }
    })
    .catch(error => {
      console.log(error)
      ElNotification({
        title: '文章列表获取失败',
        message: '服务器繁忙',
        type: 'error',
        duration: 2000
      })
    })
}

if (articleList.value.length == 0) {
  load()
}

</script>

<style scoped lang="less">
@import url(../assets/size.less);

.index-view {
  position: relative;

  .article-preview-list {
    position: relative;
    width: 80%;
    left: 0;
    right: 0;
    top: @top-bar-height;
    margin: auto;
    z-index: 10;
  }
}
</style>