<template>
    <div class="article-preview-list">
        <ul 
            v-infinite-scroll="load" 
            class="infinite-list" 
            style="overflow: auto" 
            :infinite-scroll-disabled="disabled">
            <li v-for="i in articleIdList" :key="i" class="infinite-list-item">
                <ArticlePreview :articleId="i" :publisherId="i" :title="i + '-title'" :content="i + '-content'" />
            </li>
        </ul>
        <p v-if="loading">Loading...</p>
        <p v-if="noMore">No more</p>
    </div>
</template>

<script setup lang="ts">
import ArticlePreview from './ArticlePreview.vue';
const props = defineProps<{
    articleIdList: number[],
}>()

import { computed, ref } from 'vue'

const loading = ref(false)
const noMore = ref(false)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
    //   loading.value = true
    //   noMore.value = true
}
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
        }

        .infinite-list-item+.list-item {
            margin-top: 10px;
        }
    }

    .infinite-list::-webkit-scrollbar {
        display: none;
    }
}
</style>
