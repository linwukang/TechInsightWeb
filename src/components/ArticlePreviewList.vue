<template>
  <div class="article-preview-list">
    <ul
        v-infinite-scroll="load"
        class="infinite-list"
        style="overflow: auto"
        :infinite-scroll-disabled="disabled">
      <li v-for="art in articleList" :key="art.id" class="infinite-list-item">
        <ArticlePreview
            :article="art"
            :publisherName="art.publisherUsername"
            :publisherHome="art.publisherHomeUrl"
        />
      </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script setup lang="ts">
import ArticlePreview from './ArticlePreview.vue'
import {computed, ref} from 'vue'
import type ArticleInfo from "@/type/ArticleInfo"


const props = defineProps<{
  articleList: ArticleInfo[],
  load: () => void
}>()

const loading = ref(false)
const noMore = ref(false)
const disabled = computed(() => loading.value || noMore.value)

</script>

<style lang="less" scoped>
.article-preview-list {
  height: 100%;
  width: 800px;

  .infinite-list {
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

    .infinite-list-item {
      display: flex;
      margin: 10px;
      color: var(--el-color-primary);

      .article-preview {
        width: 100%;
      }

      border-width: 0 0 1px 0;
      border-color: #eeeeee;
      border-style: solid;
    }

    .infinite-list-item + .list-item {
      margin-top: 10px;
    }
  }

  .infinite-list::-webkit-scrollbar {
    display: none;
  }
}
</style>
