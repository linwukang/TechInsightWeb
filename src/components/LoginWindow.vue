<template>
  <main class="login-window">
    <el-form label-width="60px" class="form">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" type="password" v-model="password"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button @click="login">登录</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </main>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'


let username = ref<string>("")
let password = ref<string>("")

function login() {
}

function register() {
}

</script>


<style scoped lang="less">
.login-window {
  background-color: aliceblue;
  position: relative;
  min-width: 400px;
  min-height: 250px;
  .form {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    height: 40%;
  }
}
</style>
