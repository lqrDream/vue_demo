<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="red">
      <img src="@/assets/img/1.jpg" alt="" slot="item-icon">
      <img src="@/assets/img/5.jpg" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/show" active-color="yellow">
      <img src="@/assets/img/2.jpg" alt="" slot="item-icon">
      <img src="@/assets/img/6.jpg" alt="" slot="item-icon-active">
      <div slot="item-text">展示</div>
    </tab-bar-item>
    <tab-bar-item path="/message" active-color="blue">
      <img src="@/assets/img/3.jpg" alt="" slot="item-icon">
      <img src="@/assets/img/7.jpg" alt="" slot="item-icon-active">
<!--      <div slot="item-text">消息 <strong>{{$root.read}}</strong></div>-->
      <div slot="item-text">消息 <strong>{{$store.state.read}}</strong></div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="green">
      <img src="@/assets/img/4.jpg" alt="" slot="item-icon">
      <img src="@/assets/img/8.jpg" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";

  export default {
    name: "MainTab",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>