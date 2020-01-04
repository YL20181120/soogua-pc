import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@/app/Main').default
    },
    {
      path: '/auth/login',
      name: 'login',
      component: require('@/app/Login').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
