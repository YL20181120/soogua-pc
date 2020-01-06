<template>
  <!-- User Info Box -->
  <transition name="el-fade-in-linear">
    <div class="user-info-box" v-show="showUserInfo" @click="$store.dispatch('toggleShowUserInfo')">
      <div class="user-info">
        <div class="header">
          <div class="username">
            <h4>{{ user.data.user.nickname }}</h4>
            <h5>{{ user.data.user.sign }}</h5>
          </div>
          <div class="avatar">
            <el-avatar :size="50" :src="user.data.user.avatar" shape="square">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>
          </div>
        </div>

        <div class="divider"></div>
        
        <div class="other-info">
          <div class="item">
            <label>Birthday: </label> {{ user.data.user.birthday }}
          </div>
          <div class="item">
            <label>From: </label> {{ user.data.user.from }}
          </div>
          <div class="item">
            <label>Constellation: </label> {{ user.data.user.constellation }}
          </div>
          <div class="item">
            <label>Invite Code: </label> {{ user.data.user.invite_code }}
          </div>
        </div>

        <div class="close" @click="close">
          <span>
            <i class="el-icon-close"></i>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Avatar } from 'element-ui'
  export default {
    name: 'user-info',
    components: {
      [Avatar.name]: Avatar
    },
    computed: {
      user () {
        return this.$store.getters.currentUser
      },
      showUserInfo () {
        return this.$store.getters.showUserInfo
      }
    },
    methods: {
      close () {
        this.$store.dispatch('toggleShowUserInfo')
      }
    }
  }
</script>

<style lang="less" scoped>
.user-info-box{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // background-color: rgba(0, 0, 0, 0.6);
  z-index: 9998;
}
.user-info {
  z-index: 9999;
  position: absolute;
  left: 70px;
  top: 70px;
  width: 300px;
  height: 220px;
  border: 1px #eee solid;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  padding: 30px;
  .close{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .header{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    .username{
      h4, h5 {
        font-weight: 400;
        line-height: 1.5;
      }
      h5{
        font-size: 12px;
        color: #999;
      }
    }
    .avatar {
      img {
        width: 50px;
        height: 50px;
        border-radius: 3px;
      }
    }
  }
  .divider{
    height: 2px;
    background-color: #eee;
    width: 100%;
    margin: 15px auto;
  }
  .other-info{
    .item{
      line-height: 1.5;
      font-size: 12px;
      font-weight: 100;
      label{
        font-size: 14px;
      }
    }
  }
}
</style>