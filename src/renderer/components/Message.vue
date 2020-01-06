<template>
  <div class="message">
    <div class="header">
      <h1>{{ user.nickname }} (18)</h1>
      <div class="setting">
        <span class="iconfont icon-users"></span>
      </div>
    </div>
    <div class="box">

    </div>
    <div class="send-box">
      <div class="tool-box">
        <div class="tool-item">
          <span class="iconfont icon-emoji"></span>
        </div>
        <div class="tool-item">
          <span class="iconfont icon-wenjianjia"></span>
        </div>
      </div>
      <textarea name="" class="dev-border" rows="6" autofocus v-model="msg"></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: 's-message',
    components: {},
    data () {
      return {
        user: {
          'id': '3000000522',
          'nickname': 'Chomreoun',
          'sign': 'សន្យាធ្វើអ្វីបើធ្វើមិនបាន😏',
          'created_at': '3/1/2020',
          'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/FB_IMG_1576138147025.jpg'
        },
        msg: '章子怡二胎生子！1月3日，章子怡宣布二胎宝宝出生的消息，章子怡发文：“2020年1月1日，我们的生命中多了一个他，从此我们的世界又多了一份幸福的牵挂！这是上天赐予我们的最美新年礼物，感恩！新年真好！祝福大家新年快乐！”'
      }
    }
  }
</script>

<style scoped lang="less">
.message {
  width: 100%;
  position: relative;
  .header {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
      padding-left: 21px;
      font-size: 16px;
      font-weight: 600;
    }
    .setting{
      cursor: pointer;
      padding-right: 21px;
      span {
        font-size: 20px;
      }
    }
  }
  .send-box{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    border-top: 1px #ddd solid;
    padding: 20px;
    padding-top: 8px;
    .tool-box{
      display: flex;
      .tool-item{
        padding: 2px 5px;
        span {
          font-size: 18px;
          color: #666;
        }
      }
    }
    textarea {
      width: 100%;
      border: none;
      font-size: 14px;
      font-weight: 400;
      background: none;
      resize: none;
      line-height: 1.3;
      &:focus{
        border: none;
        outline: none;
      }
    }
  }
}
</style>