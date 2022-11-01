<template>
    <div 
        class="my-header" 
        :style="{backgroundColor: background, color}"
    >{{ title }}</div>
</template>
  
<script>
  //Header自定义
  export default {
    props: {
        background: String, // 外部传入必须是字符串
        color: {
            type: String,
            default: "#fff"
        },
        title: {
            type: String,
            required: true
        }
    }
  }
</script>
  
<style lang="less" scoped>
    .my-header {
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #1d7bff;
      color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
    }
</style>