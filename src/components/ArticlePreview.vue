<template>
    <div class="article-preview">
        <router-link to="" class="main">
            <h3 class="title">{{ title }}</h3>
            <p class="content">{{ content }}</p>
        </router-link>
        <div class="publisher">
            <router-link to="">{{ "作者id: " + publisherId }}</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    articleId: number,
    title: string,
    content: string,
    publisherId: number,
}>();
</script>

<style lang="less" scoped>
.article-preview {
    height: 250px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2);
    position: relative;
    .main {
        height: 80%;
        display: block;
        .title {
            font-size: 30px;
        }
        .content {
            font-size: 17px;
        }
    }
    .publisher {
        position: absolute;
        bottom: 0;
        height: 20%;
        a {
            display: block;
            height: 100%;
        }
    }
}
</style>
