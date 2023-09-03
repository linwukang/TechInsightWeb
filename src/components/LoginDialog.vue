<template>
  <div class="login-dialog">
    <el-form label-width="60px" class="form">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" type="password" v-model="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import axios from 'axios'
import {ElNotification} from 'element-plus/lib/components/index.js';
import {
  ref
} from 'vue'

let username = ref<string>("")
let password = ref<string>("")

function login() {
  axios
      .post("/accounts/login",
          {
            params: {
              username: username.value,
              password: password.value
            }
          })
      .then(response => {
        if (response.data.logged) {
          let token = response.data.token as string
          let userId = response.data.userId as number
          localStorage.setItem("token", token)
          localStorage.setItem("userId", userId.toString())

          // 跳转到主页
          router.push("/")
        } else {
          ElNotification({
            title: '登录失败',
            message: response.data.message,
            type: 'warning',
            duration: 2000
          })
        }
      })
      .catch(error => {
        console.log(error)
        ElNotification({
          title: '登录失败',
          message: '服务器繁忙',
          type: 'error',
          duration: 2000
        })
      })
}
</script>

<style lang="less" scoped>
@import url(../assets/colors.less);

.login-dialog {
  margin: 50px 80px;
}
</style>
