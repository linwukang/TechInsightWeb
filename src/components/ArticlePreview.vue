<template>
    <div class="article-preview">
        <router-link :to="url" class="main">
            <h3 class="title">{{ title }}</h3>
            <p class="content">{{ content }}</p>
        </router-link>
        <div class="publisher">
            <router-link :to="publisherHome">{{ "作者: " + publisherName }}</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    articleId: number,
    title: string,
    content: string,
    publisherId: number,
    publisherName:string,
    publisherHome:string,
    publisherProfile:string,
    url: string
}>();
</script>

<style lang="less" scoped>
@import url(../assets/colors.less);
.article-preview {
    min-height: 200px;
    padding: 20px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2);
    position: relative;
    .main {
        padding: 20px;
        display: block;
        .title {
            font-size: 30px;
            color: @article-preview-title-font-color;
        }
        .content {
            font-size: 17px;
            color: @article-preview-content-font-color;
        }
    }
    .publisher {
        padding: 2px 10px;
        overflow: hidden;
        height: 20%;
        a {
            display: block;
            @height: 30px;
            width: 120px;
            height: @height;
            line-height: @height;
            overflow: hidden;
        }
    }
}
</style>
