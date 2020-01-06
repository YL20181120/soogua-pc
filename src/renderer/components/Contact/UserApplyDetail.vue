<template>
  <!-- User Info Box -->
  <transition name="el-fade-in-linear">
    <div class="user-info-box">
      <div class="user-info">
        <div class="header">
          <div class="avatar">
            <el-avatar :size="50" :src="user.avatar" shape="square">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>
          </div>
          <div class="username">
            <h4>{{ user.nickname }}</h4>
            <h5>{{ user.sign }}</h5>
          </div>
        </div>

        <div class="divider"></div>
        
        <div class="other-info">
          <div class="item">
            <label>SOOGUA ID: </label>
            {{ user.id }}
          </div>
          <div class="item">
            <label>Birthday: </label> {{ user.birthday }}
          </div>
          <div class="item">
            <label>From: </label> {{ user.from }}
          </div>
          <div class="item">
            <label>Constellation: </label> {{ user.constellation }}
          </div>
          <div class="item">
            <label>Invite Code: </label> {{ user.invite_code }}
          </div>
        </div>
      </div>
      <div class="tools">
        <el-button type="primary" size="medium" @click.native="agree">Agree</el-button>
        <el-button size="medium" @click.native="deny">Deny</el-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Avatar, Button } from 'element-ui'
  export default {
    name: 'contact-user-apply-detail',
    props: {
      apply: {
        type: Object,
        required: true
      }
    },
    computed: {
      user () {
        return this.apply.user
      }
    },
    components: {
      [Avatar.name]: Avatar,
      [Button.name]: Button
    },
    methods: {
      agree () {
        this.$http.post('api/v1/user/friend/' + this.user.id + '/allow')
        this.$set(this.apply, 'is_agree', 1)
        this.$emit('agree', this.user)
      },
      deny () {
        this.$http.post('api/v1/user/friend/' + this.user.id + '/deny')
        this.$set(this.apply, 'is_agree', 2)
      }
    }
  }
</script>

<style lang="less" scoped>
.user-info-box{
  width: 300px;
  height: 320px;
  border: 1px #eee solid;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  padding: 30px;
  .tools{
    height: 55px;
    line-height: 56px;
    width: 100%;
    text-align: center;
  }
  .header{
    display: flex;
    align-items: center;
    .username{
      margin-left: 30/2px;
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
      display: flex;
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