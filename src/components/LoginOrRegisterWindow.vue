<template>
  <main class="login-or-register-window">
    <div class="top">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="登录" name="login">
          <LoginWindow></LoginWindow>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <RegisterWindow></RegisterWindow>
        </el-tab-pane>
      </el-tabs>
    </div>
  </main>
</template>

<script setup lang="ts">
import axios from 'axios'
import type { TabsPaneContext } from 'element-plus/lib/components/tabs/src/constants.js'
import { ref } from 'vue'
import LoginWindow from './LoginWindow.vue'
import RegisterWindow from './RegisterWindow.vue'


let activeName = ref<string>('login')

const handleClick = (tab: TabsPaneContext, event: Event) => {
}

</script>


<style scoped lang="less">
.login-or-register-window {
  .top {
    background-color: aliceblue;
  }
}
</style>
