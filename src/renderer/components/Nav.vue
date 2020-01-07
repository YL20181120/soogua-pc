<template>
  <div class="nav">
    <div class="user" @click="$store.dispatch('toggleShowUserInfo')">
      <div class="avatar">
        <el-avatar :size="50" :src="user.data.user.avatar" shape="square">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
        </el-avatar>
      </div>
    </div>
    <div class="nav-box">
      <div class="nav-item" :class="{active: getActive('main.chat.recents')}" @click="go('main.chat.recents')">
        <span>
          <i class="iconfont icon-message"></i>
        </span>
      </div>
      <div class="nav-item" :class="{active: getActive('main.contacts')}" @click="go('main.contacts')">
        <span>
          <i class="iconfont icon-user"></i>
        </span>
      </div>
      <div class="nav-item" :class="{active: getActive('main.contents')}" @click="go('main.contents')">
        <span>
          <i class="iconfont icon-zixun"></i>
        </span>
      </div>
    </div>
    <div class="nav-menu" @click="logout" slot="reference">
      <span>
        <i class="iconfont icon-logout"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { Avatar, Popover } from 'element-ui'

export default {
  name: 's-nav',
  components: {
    [Avatar.name]: Avatar,
    [Popover.name]: Popover
  },
  computed: {
    user () {
      return this.$store.getters.currentUser
    }
  },
  data () {
    return {
      showUserInfo: true
    }
  },
  methods: {
    logout () {
      console.log('logout')
      this.$store.dispatch('logout').then(() => {
        this.$message.success('Logout Successful!')
        this.$router.push({
          name: 'auth.login'
        })
      })
    },
    go (router) {
      this.$router.push({
        name: router
      })
    },
    getActive (router) {
      return this.$route.name === router
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  height: 100vh;
  min-width: 70px;
  background: #4e4b4f;
  overflow: hidden;
  .user {
    height: 70px;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    .avatar {
      img {
        width: 50px;
        height: 50px;
        border-radius: 3px;
      }
    }
  }
  .nav-box{
    margin-top: 40px;
    .nav-item{
      color: white;
      &.active{
        color: #409EFF;
      }
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 30px;
      }
    }
  }
  .nav-menu{
    position: absolute;
    height: 50px;
    width: 50px;
    left: 10px;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    i {
      font-size: 26px;
    }
  }
}
</style>>