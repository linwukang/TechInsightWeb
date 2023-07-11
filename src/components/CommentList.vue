<template>
    <div class="comment-list">
        <ul class="comment-list-ul">
            <li class="comment-item" v-for="comment in commentList" :key="comment.id">
                <Comment
                    :id="comment.id"
                    :profile-url="comment.profileUrl"
                    :user-home="comment.userHome"
                    :username="comment.username"
                    :publish-date="comment.publishDate"
                    :content="comment.content"
                    :likes="comment.likes"
                    :dislikes="comment.dislikes"
                    >
                </Comment>
            </li>
        </ul>

    </div>
</template>

<script setup lang="ts">
import Comment from './Comment.vue'

const props = defineProps<{commentList: {
    id: number,
    profileUrl: string,
    userHome: string,
    username: string,
    publishDate: Date,
    content: string,
    likes: number,
    dislikes: number
}[]}>()

</script>

<style lang="less" scoped>
@import url(../assets/colors.less);

.comment-list {
    .comment-list-ul {
        list-style-type: none;
        .comment-item {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px #eee solid;
        }
    }
}
</style>
