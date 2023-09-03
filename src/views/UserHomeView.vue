<template>
  <div class="user-hoem-view">
    <div class="top-nav">
      <img class="profilePicture" :src="userInfo.profilePicture" alt="">
      <p class="username">{{ userInfo.username }}</p>
      <p class="gender">{{ userInfo.gender }}</p>
    </div>
    <div class="main">
      <div class="bio">{{ userInfo.bio }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import type UserInfo from "@/type/UserInfo";

const route = useRoute()
const username = ref("username" + (route.query as any).userId)

const userInfo = ref<UserInfo>({
  bio: "",
  dateOfBirth: new Date(),
  gender: "",
  id: 0,
  phoneNumber: "",
  profilePicture: "",
  username: ""
})

const mounted = () => {
  axios.get('user-info', {
    params: {
      id: (route.query as any).userId
    }
  })
      .then(response => {
        userInfo.value = {
          ...response.data
        }
      })
}

onMounted(mounted)

watch(
    () => route.query.userId,
    () => {
      mounted()
    })

</script>

<style scoped lang="less">
.user-hoem-view {
  margin-top: 20px;

  .top-nav {
    overflow: hidden;
    position: relative;

    .profilePicture {
      width: 50px;
      height: 50px;
      display: block;
      float: left;
      border-radius: 50%;
    }

    .username {
      display: block;
      color: #555;
      font-weight: bold;
      margin-left: 20px;
      height: 50px;
      line-height: 50px;
      float: left;
      font-size: 25px;
    }

    .gender {
      display: block;
      height: 20px;
      width: 50px;
      text-align: center;
      border-radius: 25px;
      line-height: 20px;
      margin-left: 30px;
      margin-top: 15px;
      font-size: 10px;
      font-weight: bold;
      color: #555;
      background-color: lightgreen;
      float: left;
    }
  }

  .main {
    padding: 30px;
    color: #888;
    border-bottom: 1px #eee solid;
  }
}
</style>