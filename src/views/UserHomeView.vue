<template>
  <div class="user-hoem-view">
    <div class="top-nav">
      <img src="" alt="">
      <p>{{ username }}</p>
    </div>
    <div class="main">

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const username = ref("username" + (route.query as any).userId)
</script>

<style scoped lang="less">
.user-hoem-view {
}
</style>