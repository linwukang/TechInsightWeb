<template>
    <div class="login-dialog">
        <el-form label-width="60px" class="form">
            <el-form-item label="用户名">
                <el-input placeholder="请输入用户名" v-model="username" />
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
import axios from 'axios'
import {
    ref
} from 'vue'

let username = ref<string>("")
let password = ref<string>("")

function login() { }
</script>

<style lang="less" scoped>
@import url(../assets/colors.less);

.login-dialog {
    margin: 50px 80px;
}
</style>
