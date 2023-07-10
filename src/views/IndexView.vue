<template>
  <div class="index-view">
    <ArticlePreviewList 
      :article-list="articleList"
      :load="load"></ArticlePreviewList>
  </div>
</template>

<script setup lang="ts">
import ArticlePreviewList from '@/components/ArticlePreviewList.vue';
import { ref } from 'vue';

const articleList = ref([{
  id: 1,
  title: 'OpenStack Icehouse 部署流程',
  content: '【代码】OpenStack Icehouse 部署流程。',
  url: '/article?id=1',
  publisher: {
    id: 1,
    userName: 'Jmilk',
    homeUrl: 'https://blog.csdn.net/Jmilk',
    profileUrl: ''
  }
},{
  id: 2,
  title: '【翻译】分布式系统',
  content: '介绍 我希望有一本文本能够汇集许多最新分布式系统背后的理念 - 例如亚马逊的Dynamo, 谷歌的BigTable和MapReduce, Apache的Hadoop等等。 在这段文字中，我试图提供一个更易理解的分布式系统简介。对我来说，这意味着两件事情：介绍你需要了解的...',
  url: '/article?id=2',
  publisher: {
    id: 2,
    userName: 'CSDN-Ada助手',
    homeUrl: 'https://blog.csdn.net/community_717',
    profileUrl: ''
  }
},{
  id: 3,
  title: '《时代》专访ChatGPT之父：人工智能影响经济还需要很多年',
  content: '划重点：① OpenAI的首席执行官山姆·奥特曼（Sam Altman）曾表示，如果使用不当，人工智能会让所有人都消亡。②在倡导人工智能可能性的同时，奥特曼敦促政策制定者制定规则和通过监管来减轻人工智能可能带来的危险。奥特曼倡导用普世的基本收入计划来缓和不平等，“它将大幅提升人们的平均收入”。③奥特...',
  url: '/article?id=3',
  publisher: {
    id: 3,
    userName: 'CSDN资讯',
    homeUrl: 'https://blog.csdn.net/csdnnews',
    profileUrl: ''
  }
},{
  id: 4,
  title: '一个arm平台工程段错误的排查',
  content: '某 arm 工控机在试点测试时发现，一旦有数据到，工控机界面会就卡住，测试人员此问题必现，经查日志为段错误，多次在相同代码位置出错。除去周末，经过一天多时间，解决了问题，虽然没有很难的技术问题，但过程还是值得记录的。由于本文没有技术含...',
  url: '/article?id=4',
  publisher: {
    id: 4,
    userName: '李迟',
    homeUrl: 'https://blog.csdn.net/subfate',
    profileUrl: ''
  }
}
])

const load = function() {
  
}

</script>

<style scoped lang="less">
.index-view {
  position: relative;
  .article-preview-list {
    width: 80%;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>