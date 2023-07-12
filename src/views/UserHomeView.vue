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
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const username = ref("username" + (route.query as any).userId)

const userInfo = ref<{
  id: number,
  username: string,
  phoneNumber: string,
  dateOfBirth: Date,
  gender: string,
  profilePicture: string,
  bio: string
}>({
  id: 1,
  username: 'Trump',
  phoneNumber: '19966668888',
  dateOfBirth: new Date('2002-06-08'),
  gender: '男',
  profilePicture: 'https://world.chinadaily.com.cn/img/attachement/jpg/site1/20170302/eca86bd9e2fa1a21c7630b.jpg',
  bio: 
`唐纳德·特朗普（Donald Trump，1946年6月14日- ），出生于美国纽约，祖籍德国巴伐利亚自由州 ，德裔美国共和党籍政治家、企业家、房地产商人、电视人，第45任美国总统（2017年1月20日-2021年1月20日）。
特朗普于1968年获得宾夕法尼亚大学沃顿商学院经济学学士学位，随后任职于父亲弗雷德·特朗普的房地产公司。1971年接管公司，从事房地产开发，投资范围逐步延伸至其他多个行业。特朗普于2015年6月以美国共和党人身份宣布参选美国总统，2016年11月9日当选美国第45任总统，2017年1月20日宣誓就职 。2020年12月，特朗普败选，连任失败。2021年1月19日，特朗普发表告别演说。
特朗普执政期间，特朗普政府在减税、强硬贸易政策、加大外交军事布局、放松金融监管方面通过立法、签署行政令、人事任命等多个方面取得了较大进展，其中税改是其前期政绩的最大亮点。
2021年1月8日，社交媒体Twitter宣布，永久封禁特朗普的账号。宾夕法尼亚州理海大学宣布，撤销在1988年授予特朗普的荣誉学位。同月13日，美国国会众议院表决通过针对总统特朗普的弹劾条款，正式指控他“煽动叛乱”。特朗普成为美国历史上首位两度遭弹劾的总统 。
2021年10月18日，特朗普在华盛顿地区法院对美国国会众议院特别委员会提起诉讼。同年，11月11日，美国联邦上诉法院批准前总统特朗普的请求，暂时停止了美国国家档案馆在12日的最后期限前向众议院特别委员会提交调查国会山骚乱事件所需要的白宫文件和相关记录。`,
})

onMounted(() => {
  axios.get('UserInfo/user-info', {
    params: {
      id: (route.query as any).userId
    }
  })
  .then(response => {
    userInfo.value = {
      ...response.data
    }
  })
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