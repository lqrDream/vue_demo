import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import(/*webpackChunkName:"home"*/'@/pages/home/Home')
    },
    {
      path: '/show',
      name: 'Show',
      component: () => import(/*webpackChunkName:"show_echart"*/'@/pages/show/Show')
    },
    {
      path: '/echart/:id',
      name: 'Echart',
      component: () => import(/*webpackChunkName:"show_echart"*/'@/pages/show/Echart')
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import(/*webpackChunkName:"message"*/'@/pages/messages/Message')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import(/*webpackChunkName:"profile_user_update"*/'@/pages/profile/Profile')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import(/*webpackChunkName:"profile_user_update"*/'@/pages/profile/User')
    },
    {
      path: '/userUpdate/:params',
      name: 'UserUpdate',
      component: () => import(/*webpackChunkName:"profile_user_update"*/'@/pages/profile/UserUpdate')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import(/*webpackChunkName:"detail"*/'@/pages/detail/Detail')
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import(/*webpackChunkName:login_reg*/'@/pages/login/Login')
    },
    {
      path: '/reg',
      name: 'Reg',
      component: () => import(/*webpackChunkName:login_reg*/'@/pages/login/Reg')
    },
    {
      path: '*',
      name: 'NoPage',
      component: () => import('@/pages/NoPage')
    }
  ]
})

// 全局导航守卫
router.beforeEach((to, from, next) => {

  if(to.path ==='/login'|| to.path ==='/reg') return next()
  let user = window.localStorage.getItem('user')
  // console.log(user)
  if (!user) {
    next('/login')
  }
  next()
})

export default router