<template>
  <div class="home-view">
    <ArticlePreviewList :article-id-list="articleIdList"></ArticlePreviewList>
  </div>
</template>

<script setup lang="ts">
import ArticlePreviewList from '@/components/ArticlePreviewList.vue';
import { ref } from 'vue';

const articleIdList = ref([1, 2, 3, 4, 5, 6, 7])

</script>

<style scoped lang="less">
.home-view {
  position: relative;
  .article-preview-list {
    width: 80%;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>