<template>
  <div class="comment">
    <div class="top">
      <router-link :to="'/user-home?userId=' + comment.userId">
        <img class="profile" :src="comment.profilePicture" alt=""/>
      </router-link>
      <router-link :to="'/user-home?userId=' + comment.userId">
        <p class="username">{{ comment.username }}</p>
      </router-link>
      <p class="publish-date">{{ comment.publishDate }}</p>
    </div>
    <div class="main">
      {{ comment.content }}
    </div>
    <div class="bottom">
      <button class="likes">👍{{ comment.likes }}</button>
      <button class="dislikes">👎{{ comment.dislikes }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import type CommentInfo from "@/type/CommentInfo";

const props = defineProps<{
  comment: CommentInfo
}>()

</script>

<style lang="less" scoped>
@import url(../assets/colors.less);

.comment {
  .top {
    .profile {
      display: block;
      width: 30px;
      height: 30px;
      float: left;
      border-radius: 50%;
    }

    > a {
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
