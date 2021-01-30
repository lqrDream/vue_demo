<template>
  <div id="main-input">
      <slot></slot>
  </div>
</template>

<script>
  import HeaderInputItem from "./HeaderInputItem";
  export default {
    name: "HeaderInput",
    components:{
      HeaderInputItem
    }
  }
</script>

<style scoped>
    .main-input{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      background-color: #f9f9f9;
      height: 40px;
      display: flex;
      z-index: 22;
    }
</style>