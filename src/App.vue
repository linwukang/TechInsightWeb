<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-view class="main"></router-view>
</template>

<style scoped lang="less">
.main {
  position: absolute;
  width: 1000px;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  overflow: hidden;
  height: 100%;
}
</style>
