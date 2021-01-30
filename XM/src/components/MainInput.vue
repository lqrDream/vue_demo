<template>
  <div>
<!--        <header-input>-->
<!--          <header-input-item path="/home">-->
<!--            <slot name="main-input-left">-->
<!--              <div slot="input-left">三</div>-->
<!--            </slot>-->
<!--            <slot name="main-input-content">-->
<!--              <div slot="input-main">-->
<!--                <label for="search-x"><input type="search" id="search-x" placeholder="请输入内容"></label>-->
<!--              </div>-->
<!--            </slot>-->
<!--            <slot name="main-input-right">-->
<!--              <div slot="input-right">-->
<!--                <router-link to="/login">登录</router-link>-->
<!--              </div>-->
<!--            </slot>-->
<!--          </header-input-item>-->
<!--        </header-input>-->
  </div>
</template>

<script>
  import HeaderInput from "./header-input/HeaderInput";
  import HeaderInputItem from "./header-input/HeaderInputItem";
  export default {
    name: "MainInput",
    components: {
      HeaderInput,
      HeaderInputItem
    }
  }
</script>

<style scoped>

</style>