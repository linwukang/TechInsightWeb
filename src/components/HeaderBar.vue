<template>
  <div class="header-bar">
    <div class="left">
      <router-link to="/">
        首页
      </router-link>
    </div>
    <div class="search">
      <el-input v-model="input" :placeholder="placeholder">
        <template #append>
          <el-button :icon="Search"/>
        </template>
      </el-input>
    </div>
    <div class="my">
      <router-link :to="userHome">
        <img class="profile" :src="profilePicture" :alt="username">
        <p class="username">{{ username }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import {Search} from '@element-plus/icons-vue'
import axios from "axios";
import {useRoute} from "vue-router";

const input = ref("")
const placeholder = ref("拜登当众拉屎")
const username = ref("")
const profilePicture = ref("")
const userHome = ref("/user-home?userId=" + localStorage.getItem("userId"))


onMounted(() => {
  axios.get('user-info', {
    params: {
      id: localStorage.getItem("userId")
    }
  })
      .then(response => {
        username.value = response.data.username
        profilePicture.value = response.data.profilePicture
      })
})
</script>

<style lang="less" scoped>
@import url(../assets/colors.less);
@import url(../assets/size.less);

.header-bar {
  padding: 10px;
  display: block;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.97);
  border-bottom: 1px #eee solid;

  .left {
    display: block;
    float: left;
    width: 340px;
    height: @top-bar-height;
  }

  .search {
    display: block;
    float: left;
    height: @top-bar-height;
    line-height: @top-bar-height;
  }

  .my {
    > a {
      display: block;
      float: right;
      height: @top-bar-height;
      line-height: @top-bar-height;
      text-align: center;

      .profile {
        display: block;
        float: left;
        width: @top-bar-height;
        height: @top-bar-height;
        border-radius: 50%;
      }

      .username {
        float: left;
        display: block;
        font-size: 30px;
        color: #666;
      }
    }
  }
}
</style>
