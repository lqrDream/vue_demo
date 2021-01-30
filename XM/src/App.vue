<template>
  <div id="app">
    <Loading v-if="$root.loading"></Loading>
<!--    <main-input></main-input>-->
    <keep-alive
      :include="['Message']"
     >
      <router-view></router-view>
    </keep-alive>
    <main-tab v-if="$root.dFooter"></main-tab>
  </div>
</template>

<script>
  import MainTab from "./components/MainTab";
  import MainInput from "./components/MainInput";
  import Loading from '@/components/loading.vue'
  export default {
    name: 'App',
    components:{
      MainTab,
      MainInput,
      Loading
    },
    watch: {
      $route:{
        handler(newvalue){
          let path = newvalue.path
          console.log(path)
          if(/login|reg|user|detail|echart/.test(path)){
            this.$root.dFooter = false
            // console.log(this.$root.dFooter)
          }else{
            this.$root.dFooter= true
          }

          if (/login|profile|user|userupdate|reg/.test(path)) {
            this.$root.loading = false
          }
        }
      }

    }
  }
</script>

<style>
#app {
  position: relative;
  padding-top: 40px;
  padding-bottom: 50px;
  margin: 0 auto;
  max-width: 6.4rem;
}

</style>
