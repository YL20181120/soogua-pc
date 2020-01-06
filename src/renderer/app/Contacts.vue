<template>
  <div class="contacts">
    <div class="friends">
      <el-collapse value="2">
        <el-collapse-item :title="'　New Friend' + '(' + applies.length + ')'" name="1">
          <contact-user-apply :apply="item" v-for="item in applies" :key="item.id" @click.native="showUserApply(item)"/>
        </el-collapse-item>
        <el-collapse-item :title="'　Contacts' + '(' + friends.length + ')'" name="2">
          <contact-user :user="item" v-for="item in friends" :key="item.id" @click.native="showUser(item)"/>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="user-detail">
      <contact-user-detail :user="currentUser" v-if="currentUser != null && detail_type == 'user'" @delete="deleteFriend"/>
      <contact-user-apply-detail :apply="currentUser" v-if="currentUser != null && detail_type == 'apply'" @agree="agree"/>
      <div v-show="currentUser == null" class="no-user">
        <el-avatar :size="80" src="https://g-i.oss-cn-beijing.aliyuncs.com/logo%202store_1024pt.png" shape="square">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
        </el-avatar>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import { Collapse, CollapseItem, Loading, Avatar } from 'element-ui'
  import User from '../components/Contact/User'
  import UserApply from '../components/Contact/UserApply'
  import UserDetail from '../components/Contact/UserDetail'
  import UserApplyDetail from '../components/Contact/UserApplyDetail'
  export default {
    name: 'contacts',
    data () {
      return {
        currentUser: null,
        detail_type: 'user'
      }
    },
    components: {
      [Collapse.name]: Collapse,
      [CollapseItem.name]: CollapseItem,
      [User.name]: User,
      [UserDetail.name]: UserDetail,
      [Avatar.name]: Avatar,
      [UserApply.name]: UserApply,
      [UserApplyDetail.name]: UserApplyDetail
    },
    computed: {
      friends () {
        return this.$store.getters.userFriends
      },
      applies () {
        return this.$store.getters.applies
      }
    },
    methods: {
      showUser (user) {
        this.detail_type = 'user'
        this.currentUser = user
      },
      showUserApply (apply) {
        if (apply.is_agree !== 0) {
          this.detail_type = 'user'
          this.currentUser = apply.user
        }
        if (apply.is_agree === 0) {
          this.detail_type = 'apply'
          this.currentUser = apply
        }
      },
      agree (user) {
        this.detail_type = 'user'
        this.currentUser = user
      },
      async deleteFriend (user) {
        this.currentUser = null
        await store.dispatch('fetchApplies')
        await store.dispatch('fetchFriends')
      }
    },
    async beforeRouteEnter (to, from, next) {
      // 等待模型数据加载完毕,才继续进行vue组件的生命周期
      let loadingInstance = Loading.service({ fullscreen: true })
      await store.dispatch('fetchApplies')
      await store.dispatch('fetchFriends').then(() => loadingInstance.close())
      next()
    }
  }
</script>

<style lang="less" scoped>
.friends {
  height: 100vh;
  min-width: 300px;
  width: 300px;
  border-right: 1px solid #ddd;
  overflow-x: scroll;
  
}
.user-detail{
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  .no-user {
    img{
      width: 100px;
      height: auto;
    }
  }
}
</style>