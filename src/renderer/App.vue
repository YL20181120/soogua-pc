<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'soogua'
  }
</script>

<style lang="less">
  @import url('./assets/fonts/iconfont/iconfont.css');
  * {
    margin: 0;
    padding: 0;
  }
  .el-avatar {
    img {
      width: 100%;
    }
  }
  .dev-border {
    border: 1px dashed red;
    box-sizing: border-box;
  }
</style>
