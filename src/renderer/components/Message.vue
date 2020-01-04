<template>
  <div class="message">
    <div class="header">
      <h1>{{ user.nickname }} (18)</h1>
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
        }
      }
    }
  }
</script>

<style scoped lang="less">
.message {
  width: 100%;
  .header {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    padding-left: 21px;
    h1{
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>