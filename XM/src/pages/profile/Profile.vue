<template>
  <div class="profile">
    <div class="profile-header" @click="$router.push('user')">
      <img :src="this.login.icon" alt="">
      <div class="profile-header-left">
        <h3>{{this.login.nikename}}</h3>
        <span>&gt;</span>
      </div>
    </div>
    <div class="profile-content">
      <div class="profile-item">
        <img src="@/assets/img/9.jpg" alt="">
        <div class="profile-item-left">
          <h3>收藏</h3>
          <span>&gt;</span>
        </div>
      </div>
      <div class="profile-item">
        <img src="@/assets/img/9.jpg" alt="">
        <div class="profile-item-left">
          <h3>设置</h3>
          <span>&gt;</span>
        </div>
      </div>
      <div class="profile-item">
        <img src="@/assets/img/9.jpg" alt="">
        <div class="profile-item-left">
          <h3>意见反馈</h3>
          <span>&gt;</span>
        </div>
      </div>
      <div class="profile-item">
        <img src="@/assets/img/9.jpg" alt="">
        <div class="profile-item-left">
          <h3>关于我们</h3>
          <span>&gt;</span>
        </div>
      </div>
    </div>
    <div class="profile-footer">
      <input type="button" :value="dl" :style="isDl" @click="dlHandle">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data(){
      return{
        dl:"立即登录",
        dlColor:'green',
        login:[]
      }
    },
    methods:{
      dlHandle(){
        if(this.login.length === 0){
          this.$router.push('/login')
        }else{
          window.localStorage.removeItem('user')
          this.$router.replace('/login')
        }
      },
    },
    computed:{
      isDl(){
        return {backgroundColor:this.dlColor}
      }
    },
    mounted() {
      this.login = JSON.parse(window.localStorage.getItem('user')).data
      console.log('aaa',this.login)
      if(this.login){
        this.dl = '退出登录'
        this.dlColor = 'red'
      }
    }
  }
</script>

<style scoped>
.profile{
  /*background-color: red;*/
  /*margin: 0 auto;*/
  /*max-width: 6.4rem;*/
}
  .profile-header{
    background-color: #f9f9f9;
    display: flex;
    padding:  0.2rem;
  }
  .profile-header img{
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.2rem;
  }
  .profile-header-left{
    font-size: 0.2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
.profile-content{
  margin: 0.3rem 0;
}
.profile-item{
  background-color: #f9f9f9;
  display: flex;
}
.profile-item img{
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.2rem;
}
.profile-item-left{
  font-size: 0.2rem;
  padding: 0.2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid #898989;
}
.profile-item:last-child .profile-item-left{
  border-bottom: none;
}
  .profile-footer{
    text-align: center;
  }
  .profile-footer input{
    width: 2rem;
    height: 0.5rem;
    border: none;
    color: #ffffff;
    outline: none;
  }
</style>