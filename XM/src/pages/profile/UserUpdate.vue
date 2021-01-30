<template>
  <div>
    <header-input>
      <header-input-item path="/home">
        <div slot="input-left" @click="goBack"><</div>
        <div slot="input-main">
          <div></div>
        </div>
        <div slot="input-right">
          <div @click="updataHandle">保存</div>
        </div>
      </header-input-item>
    </header-input>
    <div class="user-main">
      <div class="user-main-item">
        <input type="text" class="user-main-update" v-model.trim="msg" v-focus>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserUpdate",
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      updataHandle() {
        if(this.msg.length !== 0){
          let obj = JSON.parse(window.localStorage.getItem('user'))
          obj.data.nikename = this.msg
          // console.log(obj)
          window.localStorage.setItem('user', JSON.stringify(obj))
          this.$router.push('/user')
        }else{
          this.$router.go(-1)
        }
      },
      goBack(){
        this.$router.go(-1)
      }
    },
    mounted() {
      // console.log(this.$route.params.params)
      this.msg = this.$route.params.params
    }
  }
</script>

<style scoped>
  .user-main {
    margin-top: 0.1rem;
    background-color: aliceblue;
  }

  .user-main-item {
    display: flex;
    justify-content: space-between;
    line-height: 0.8rem;
    height: 0.8rem;
  }

  .user-main-update {
    height: 0.8rem;
    width: 100%;
    border: 0.01rem solid #c6c6c6;
    line-height: 0.8rem;
    font-size: 0.4rem;
    text-align: right;
    padding: 0.1rem;
    box-sizing: border-box;

  }
</style>