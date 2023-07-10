<template>
    <div class="article-preview-list">
        <ul 
            v-infinite-scroll="load" 
            class="infinite-list" 
            style="overflow: auto" 
            :infinite-scroll-disabled="disabled">
            <li v-for="art in articleList" :key="art.id" class="infinite-list-item">
                <ArticlePreview 
                    :articleId="art.id" 
                    :publisherId="art.publisher.id" 
                    :publisherName="art.publisher.userName"
                    :publisherHome="art.publisher.homeUrl"
                    :publisherProfile="art.publisher.profileUrl"
                    :title="art.title" 
                    :content="art.content" 
                    :url="art.url" />
            </li>
        </ul>
        <p v-if="loading">Loading...</p>
        <p v-if="noMore">No more</p>
    </div>
</template>

<script setup lang="ts">
import type { Action } from 'element-plus/lib/components/index.js';
import ArticlePreview from './ArticlePreview.vue';
const props = defineProps<{
    articleList: {      // 文章列表
        id: number,         // 文章 id
        title: string,      // 文章标题
        content: string,    // 文章内容
        url: string,
        publisher: {
            id: number,         // 作者 id
            userName: string,   // 作者名称
            homeUrl: string,    // 作者主页地址
            profileUrl: string, // 作者头像地址
        }
    }[],
    load: () => void
}>()

import { computed, ref } from 'vue'

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

        .infinite-list-item+.list-item {
            margin-top: 10px;
        }
    }

    .infinite-list::-webkit-scrollbar {
        display: none;
    }
}
</style>
