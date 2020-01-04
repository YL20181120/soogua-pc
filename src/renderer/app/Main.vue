<template>
  <div class="main">
    <s-nav></s-nav>
    <s-session></s-session>
    <s-message></s-message>
  </div>
</template>

<script>
  import Nav from '../components/Nav'
  import Session from '../components/Session'
  import Message from '../components/Message'
  export default {
    name: 'home-page', // HomePage
    components: {
      [Nav.name]: Nav,
      [Session.name]: Session,
      [Message.name]: Message
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less">
.main{
  background-color: #f3f3f3;
  display: flex;
}
html {
  font-family:'Alibaba-PuHuiTi-Light', 'Courier New Light', Courier, monospace;
}
</style>