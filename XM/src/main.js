import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
import '@/assets/js/font.js'
import '@/assets/css/base.css'
import '@/assets/css/common.css'

import '@/router/axios'



import '@/filters'
/* eslint-disable no-new */

Vue.component('header-input',()=>import('@/components/header-input/HeaderInput'))
Vue.component('HeaderInputItem',()=>import('@/components/header-input/HeaderInputItem'))

Vue.directive('focus',{
  inserted(el){
    el.focus()
  }
})


let app = new Vue({
  el: '#app',
  data:{
    dFooter:true,
    loading:true,
    // read:''
  },
  router,
  store,
  render: h => h(App)
})


export default  app