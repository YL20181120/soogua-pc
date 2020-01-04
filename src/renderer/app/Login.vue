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
  methods: {
    async login () {
      let loadingInstance = Loading.service({ fullscreen: true })
      const { username, password } = this
      await this.$store.dispatch('attemptLogin', { username, password }).then((data) => {
        this.$message.success('欢迎回来~')
        this.$router.push({ name: 'landing-page' })
        loadingInstance.close()
      })
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