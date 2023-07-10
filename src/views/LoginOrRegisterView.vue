<template>
  <div class="login-or-register-view">
    <LoginOrRegisterDialog></LoginOrRegisterDialog>
  </div>
</template>

<script setup lang="ts">
import LoginOrRegisterDialog from '@/components/LoginOrRegisterDialog.vue'
</script>

<style scoped lang="less">
.login-or-register-view {
  position: relative;
  .login-or-register-dialog {
    width: 500px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    border-radius: 30px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  }
}
</style>