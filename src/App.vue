<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HeaderBar from '@/components/HeaderBar.vue'

</script>

<template>
  <HeaderBar></HeaderBar>
  <router-view class="main"></router-view>
</template>

<style scoped lang="less">
@import url(./assets/size.less);


.main {
  position: absolute;
  width: @main-content-width;
  left: 0;
  right: 0;
  top: @top-bar-height + 25px;
  margin: auto;
  overflow: visible;
  height: 100%;
}

.header-bar {
  left: 0;
  right: 0;
  position: fixed;
  margin: auto;
  top: 0;
  width: @main-content-width;
  z-index: 20;
}
</style>
