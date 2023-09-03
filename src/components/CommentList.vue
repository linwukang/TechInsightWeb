<template>
  <div class="comment-list">
    <ul class="comment-list-ul">
      <li class="comment-item" v-for="comment in commentList" :key="comment.id">
        <Comment :comment="comment"/>
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import CommentInfo from "@/type/CommentInfo";
import Comment from "@/components/Comment.vue";

const props = defineProps<{ commentList: CommentInfo[] }>()

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
