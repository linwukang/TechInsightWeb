<template>
  <div class="article-view">
    <div class="title">
      {{ title }}
    </div>
    <main class="content">
      {{ content }}
      {{ articleId }}
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const title = ref("123")
const content = ref("123")
const route = useRoute()
const articleId = ref<number>((route.query as any).id)
</script>

<style scoped lang="less">
.article-view {
  .title {
    font-size: 45px;
  }
  .content {
    font-size: 20px;
  }
}
</style>