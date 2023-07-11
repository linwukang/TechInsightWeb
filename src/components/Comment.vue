<template>
    <div class="comment">
        <div class="top">
            <router-link :to="userHome">
                <img class="profile" :src="profileUrl" alt="" />
            </router-link>
            <router-link :to="userHome">
                <p class="uesrname">{{ username }}</p>
            </router-link>
            <p class="publish-date">{{ publishDate }}</p>
        </div>
        <div class="main">
            {{ content }}
        </div>
        <div class="bottom">
            <button class="likes">👍{{ likes }}</button>
            <button class="dislikes">👎{{ dislikes }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    id: number,
    profileUrl: string,
    userHome: string,
    username: string,
    publishDate: Date,
    content: string,
    likes: number,
    dislikes: number
}>()

</script>

<style lang="less" scoped>
@import url(../assets/colors.less);
.comment {
    .top{
        .profile {
            display: block;
            width: 30px;
            height: 30px;
            float: left;
            border-radius: 50%;
        }
        >a{
            display: block;
            float: left;
            .username {
                height: 30px;
                line-height: 30px;
                width: 50px;
            }
        }
        .publish-date {
            float: right;
        }
        overflow: hidden;
    }
    .main {
        padding: 10px;
    }
    .bottom {

    }
}
</style>
