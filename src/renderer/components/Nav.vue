<template>
  <div class="nav">
    <div class="user" @click="showUserInfo=!showUserInfo">
      <div class="avatar">
        <img
          :src="user.data.user.avatar"
          alt=""
        >
      </div>
    </div>
    <!-- User Info Box -->
    <transition name="el-fade-in-linear">
      <div class="user-info" v-if="showUserInfo">
        <div class="header">
          <div class="username">
            <h4>{{ user.data.user.nickname }}</h4>
            <h5>{{ user.data.user.sign }}</h5>
          </div>
          <div class="avatar">
            <img
              :src="user.data.user.avatar"
              alt=""
            >
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

        <div class="close" @click="showUserInfo=false">
          <span>
            <i class="el-icon-close"></i>
          </span>
        </div>
      </div>
    </transition>
    <div class="nav-box">
      <div class="nav-item active">
        <span>
          <i class="iconfont icon-message"></i>
        </span>
      </div>
      <div class="nav-item">
        <span>
          <i class="iconfont icon-user"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-nav',
  computed: {
    user () {
      return this.$store.getters.currentUser
    }
  },
  data () {
    return {
      showUserInfo: false
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
  .user-info {
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
}
</style>>