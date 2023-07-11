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
}>()
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
            min-height: 140px;
            position: relative;
            line-height: 20px;
            height: 40px;
            overflow: hidden;
        }
        .content::after {
            content: ". . ."; 
            position: absolute; 
            bottom: 0; 
            right: 0; 
            padding-left: 40px;
            background: -webkit-linear-gradient(left, transparent, #fff 55%);
            background: -moz-linear-gradient(left, transparent, #fff 55%);
            background: -o-linear-gradient(left, transparent, #fff 55%);
            background: linear-gradient(to right, transparent, #fff 55%);
        }
    }
    .main:hover {
        background: none; 
        position: relative;
    }

    .main:hover::after {
        display: block;
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
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
