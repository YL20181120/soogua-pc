import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@/app/Main').default,
      redirect: '/chat/recents',
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/chat/recents',
          name: 'main.chat.recents',
          component: require('@/app/Message').default,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/im-contacts',
          name: 'main.contacts',
          component: require('@/app/Contacts').default,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/im-contents',
          name: 'main.contents',
          component: require('@/app/Contents').default,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/auth/login',
      name: 'auth.login',
      component: require('@/app/Login').default
    },
    {
      path: '*',
      redirect: '/im-message'
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
router.beforeEach(beforeEach)
export default router
