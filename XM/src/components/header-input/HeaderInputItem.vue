<template>
  <div ref="headerInputItem" >
    <div class="back-on">
      <slot name="input-left"></slot>
    </div>
    <slot name="input-main"></slot>
    <div class="option">
      <slot name="input-right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderInputItem",
    props:{
      path:String
    },
    computed:{
      isActive(){
        return console.log(this.path)
      }
    },
    mounted() {
      // console.log(this.$route.path)
      // if(this.path === this.$route.path){
      //   console.log(this.$refs.headerInputItem)
      // }
      // console.log(this.path)
    }
  }
</script>

<style scoped>
  .back-on {
    flex: 1;
  }

  #search-x {
    flex: 8;
    height: 30px;
    margin-top: 5px;
    padding-left: 10px;
    border-radius: 10px;
    border: 2px solid red;
  }

  .option {
    flex: 1;
    height: 100%;
  }
</style>