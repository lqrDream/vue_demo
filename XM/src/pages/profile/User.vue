<template>
  <div>
    <header-input>
      <header-input-item path="/home">
        <div slot="input-left" @click="$router.push('/profile')"><</div>
        <div slot="input-main">
          <div>个人信息</div>
        </div>
      </header-input-item>
    </header-input>
<!--    <div id="main-input">-->
<!--      <div class="back-on" @click="$router.go(-1)">&lt;</div>-->
<!--      <div class="option">保存</div>-->
<!--    </div>-->
    <div class="user-main">
      <router-link :to="`/userUpdate/${this.user.nikename}`" class="user-main-item">
        <h3>昵称</h3>
        <span><i>{{this.user.nikename}}</i>&nbsp;&nbsp;&gt;</span>
      </router-link>
      <div class="user-main-item">
        <h3>性别</h3>
        <span><i>{{getColor(this.user.sex)}}</i>&nbsp;&nbsp;&gt;</span>
      </div>
      <div class="user-main-item">
        <h3>出生年月</h3>
        <span><i>{{ this.user.date | date('yyyy-mm-dd') }}</i>&nbsp;&nbsp;&gt;</span>
      </div>
      <div class="user-main-item">
        <h3>电话号码</h3>
        <span><i>{{this.user.iphone}}</i> &nbsp;&nbsp;&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User",
    data(){
      return{
        user:[]
      }
    },
    methods:{
      getColor(val){
        return val === false ? '男' : '女'
      }
    },
    mounted() {
      this.user = JSON.parse(window.localStorage.getItem('user')).data
      console.log('aaa',this.user)
    }
  }
</script>

<style scoped>
  .user-main{
    margin-top: 0.1rem;
    background-color: aliceblue;
  }
.user-main-item{
  display: flex;
  justify-content: space-between;
  line-height: 0.8rem;
  padding: 0 0.15rem;
  margin-left: 0.2rem;
  border-bottom: 0.01rem solid #c6c6c6;
}
</style>