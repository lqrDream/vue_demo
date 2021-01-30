import Vue from 'vue'
import axios from "axios";
import router from './index'
import main from '../main'
axios.interceptors.request.use(config=>{
  // 获取本地loken 携带在请求头里面
  let user =  window.localStorage.getItem('user')
  let token  = user ? JSON.parse(user).token : ''
  config.headers={
    token
    // token:'1234567891234567'
  }
  return config
},err=>Promise.reject(err))

axios.interceptors.response.use(response=>{
  // console.log(router)
  // 获取当前路径
  let currentPath = router.currentRoute.fullPath
  // console.log(currentPath)
  if(response.data.err ===2 && !currentPath.includes('/login')){
    router.replace({
      path:'/login',
      query:{p:currentPath}
    })
  }
  main.loading = false
  return response
},error => Promise.reject(error))


Vue.prototype.$axios = axios
window.axios = axios
export default axios