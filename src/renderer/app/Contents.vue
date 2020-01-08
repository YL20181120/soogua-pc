<template>
  <div class="contents">
    <h1>Contents</h1>
    <el-button @click="login">Login</el-button>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
  import { Button } from 'element-ui'
  import WebIMConfig from '$config/easemob'
  const WebIM = require('easemob-websdk')
  export default {
    name: 'Contents',
    components: {
      [Button.name]: Button
    },
    computed: {
      user () {
        return this.$store.getters.currentUser
      }
    },
    methods: {
      login () {
        this.connect()
      },
      connect () {
        WebIM.config = WebIMConfig
        /* eslint-disable-next-line */
        window.conn = WebIM.conn = new WebIM.default.connection({
          appKey: WebIM.config.appkey,
          isHttpDNS: WebIM.config.isHttpDNS,
          isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
          host: WebIM.config.Host,
          https: WebIM.config.https,
          url: WebIM.config.xmppURL,
          apiUrl: WebIM.config.apiURL,
          isAutoLogin: WebIM.config.isAutoLogin,
          heartBeatWait: WebIM.config.heartBeatWait,
          autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
          autoReconnectInterval: WebIM.config.autoReconnectInterval,
          isStropheLog: WebIM.config.isStropheLog,
          delivery: WebIM.config.delivery
        })
        window.conn.listen({
          onOpened: this.opened,
          onClosed: function (message) {
            console.log('onclose:' + message)
          }, // 连接关闭回调
          onTextMessage: this.onTextMessage,
          onError: function (message) {
            console.log('onError: ', message)
          }
        })

        let options = {
          apiUrl: WebIM.config.apiURL,
          user: this.currentUser.easemob.user_id,
          pwd: this.currentUser.easemob.password,
          appKey: WebIM.config.appkey
        }
        window.conn.open(options)
        setTimeout(() => {
          this.$toast.clear()
        }, 300)
      }
    }
  }
</script>

<style lang="less">
.contents{
  height: 100vh;
  width: 100%;
  overflow: scroll;
  padding:0 30px;
}
</style>