<template>
    <div class="login">
      <div class="logo-box">
        <img src="https://g-i.oss-cn-beijing.aliyuncs.com/logo%202store_1024pt.png" alt="" class="logo">
      </div>
      <h1>SOOGUA LOGIN</h1>
      <div class="form">
        <el-input type="text" placeholder="Please input model or email" clearable v-model="username"
        prefix-icon="el-icon-user" class="form-input"
        ></el-input>
        <el-input type="password" placeholder="Please input your password" clearable v-model="password"
        prefix-icon="el-icon-lock" class="form-input"
        ></el-input>
        <el-button type="primary" size="medium" native-type="submit" class="login-btn" @click="login">Login</el-button>
      </div>
    </div>
</template>

<script>
import { Button, Input, Loading } from 'element-ui'

export default {
  name: 'login',
  components: {
    [Button.name]: Button,
    [Input.name]: Input
  },
  data () {
    return {
      username: '18993296144',
      password: '02FAA966'
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.currentUser
    }
  },
  methods: {
    async login () {
      let loadingInstance = Loading.service({ fullscreen: true })
      const { username, password } = this
      await this.$store.dispatch('attemptLogin', { username, password }).then((data) => {
        this.$message.success('Welcome back ~')
        this.$router.push({ name: 'main.chat.recents' })
        loadingInstance.close()
      }).then(() => {
        this.connect()
      })
    },
    connect () {
      /**
       * 首先构造 sdk 配置信息
       * param1 为资源存储路径，输入参数
       * param2 为工作路径，输入参数，日志存储在这里
       * param3 为 appkey ，输入参数，easemob-demo#chatdemoui 为 DemoAppKey ，需填写自己的 Appkey
       * param4 为设备 ID ，默认 0
       * return 配置模块对象
       */
      // var emchatconfigs = new easemob.EMChatConfig('.', '.', '1107190322010970#soogua', 0)
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  .logo-box {
    img{
      width: 80px;
      height: auto;
      border-radius: 8px;
    }
  }
  h1{
    text-align: center;
    margin-bottom: 20px;
  }
  .form {
    height: 190px;
    width: 360px;
    border: 1px solid rgb(0, 132, 255);
    box-sizing: border-box;
    border-radius: 10px;
    padding: 15px;
    .login-btn {
      width: 100%;
    }
    .form-input {
      margin-bottom: 20px;
    }
  }
}
</style>