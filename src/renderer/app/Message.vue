<template>
  <div class="im-message">
    <s-session></s-session>
    <s-message></s-message>
  </div>
</template>

<script>
  import Session from '../components/Session'
  import Message from '../components/Message'
  export default {
    name: 'message-page', // HomePage
    components: {
      [Session.name]: Session,
      [Message.name]: Message
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
.im-message{
  background-color: #f3f3f3;
  display: flex;
}
</style>