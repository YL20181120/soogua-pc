<template>
  <div class="main">
    <s-nav class="nav"></s-nav>
    <user-info></user-info>
    <keep-alive>
      <router-view class="wrapper-box"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Nav from '../components/Nav'
  import Session from '../components/Session'
  import Message from '../components/Message'
  import UserInfo from '../components/UserInfo'
  export default {
    name: 'home-page', // HomePage
    components: {
      [Nav.name]: Nav,
      [Session.name]: Session,
      [Message.name]: Message,
      [UserInfo.name]: UserInfo
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less">
.main{
  background-color: #f3f3f3;
}
.nav {
  position: relative;
  top: 0;
  left: 0;
  min-width: 70px;
  width: 70px;
}
.wrapper-box {
  position: absolute;
  top: 0;
  left: 70px;
  right: 0;
}
html {
  font-family:'Alibaba-PuHuiTi-Light', 'Courier New Light', Courier, monospace;
}
</style>