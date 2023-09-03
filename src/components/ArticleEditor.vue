<template>
  <div class="app-container">
    <Editor id="tinymce" v-model="content" :init="init"/>
    <!-- <div v-html="tinymceHtml"></div> -->
  </div>
</template>
<script setup lang="ts">
import {ref, onMounted, watch} from 'vue'
import tinymce from 'tinymce/tinymce'
// 使用该方法需要引入下面的数据
import 'tinymce/models/dom'                   // 特别注意 tinymce 6.0.0 版本之后必须引入，否则不显示
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'     // 引入组件
import 'tinymce/icons/default'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import 'tinymce/themes/silver/theme.min.js'
import 'tinymce/skins/ui/oxide/skin.min.css'

const props = defineProps({
  getContent: {
    type: Function,
    required: true
  }
})

const content = ref<string>('')
const init = {
  //初始化数据
  selector: 'textarea',
  height: 600, // 限制高度
  statusbar: false,
  object_resizing: false,
  image_description: false,
  image_dimensions: true,                           // 可以操作图片
  plugins: 'link lists image code table wordcount', // 富文本插件
  font_size_formats: '8px 10px 12px 14px 16px 18px 24px 36px 48px 128px',
  font_family_formats:
      '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif',
  toolbar:
      'undo redo fontfamily fontsize fontname bold italic underline strikethrough | fontsizeselect | forecolor | alignleft aligncenter alignright',
  branding: false,              //是否禁用“Powered by TinyMCE”
  menubar: false,               //顶部菜单栏显示
  paste_data_images: true,      // 可以粘贴图片
}

const emits = defineEmits<{
  (event: 'update:bindHtml', val: string): void // 富文本内容
}>()

onMounted(() => {
  tinymce.init({}) // 初始化富文本
})

// 实现双向绑定
watch(
    () => content.value,
    () => {
      props.getContent?.call(props.getContent, content.value)
    }
);
</script>
  
  