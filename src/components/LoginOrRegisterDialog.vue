<template>
  <div class="login-or-register-dialog">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="登录" name="login">
        <LoginDialog></LoginDialog>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">
        <RegisterDialog></RegisterDialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import type { TabsPaneContext } from 'element-plus/lib/components/tabs/src/constants.js'
import { ref } from 'vue'
import LoginDialog from './LoginDialog.vue'
import RegisterDialog from './RegisterDialog.vue'


let activeName = ref<string>('login')

const handleClick = (tab: TabsPaneContext, event: Event) => {
}

</script>


<style scoped lang="less">
@import url(../assets/colors.less);

.login-or-register-dialog {
  background-color: @dialog-backgroup-color;
  .el-tabs {
    padding: 30px;
  }
}
</style>
