<template>
  <div class='contact-user-item'>
    <div class='avatar'>
      <el-avatar :size="50" :src="user.avatar" shape="square">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </el-avatar>
    </div>
    <div class="message">
      <div class="nickname">
        <h5>{{ user.nickname }}</h5>
      </div>
      <div class="last-message">
        <p>{{ apply.messages[apply.messages.length-1] }}</p>
      </div>
      <div class="time">
        <span v-show="apply.is_agree==0">{{ apply.updated_at }}</span>
        <span v-show="apply.is_agree==1">Added</span>
        <span v-show="apply.is_agree==2">Denyed</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { Avatar } from 'element-ui'
  export default {
    name: 'contact-user-apply',
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
      [Avatar.name]: Avatar
    }
  }
</script>

<style lang="less">
.contact-user-item{
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:last-child{
    border-bottom: none;
  }
  .avatar {
    min-width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid red;
    // box-sizing: border-box;
    img {
      width: 50px;
      height: 50px;
      border-radius: 3px;
    }
  }
  .message{
    width: 230px;
    display: flex;
    flex-direction: column;
    .time{
      position: absolute;
      right: 10px;
      top: 7px;
      color: gray;
      span{
        font-size: 12px;
      }
    }
    .nickname {
      height: 30px;
      line-height: 30px;
      width: 145px;
      h5{
        font-size: 14px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
      }
    }
    .last-message {
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      padding-right: 10px;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: gray;
      }
    }
  }
}
</style>