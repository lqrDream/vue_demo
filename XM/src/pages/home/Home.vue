<template>
  <div class="home">
    <header-input>
      <header-input-item path="/home">
        <div slot="input-left">三</div>
        <div slot="input-main">
          <label for="search-x"><input type="search" id="search-x" placeholder="请输入内容" v-model="msg"  v-focus></label>
        </div>
        <div slot="input-right">
          <router-link to="/login">登录</router-link>
        </div>
      </header-input-item>
    </header-input>
    <!--    <div class="banner">-->
    <!--      <ul class="clearfix">-->
    <!--        <router-link :to="`/detail/${n._id}?collectionName=banner`" v-for="(n,i) of banner" :key="n._id" tag="li">-->
    <!--        <router-link :to="`/detail/${n._id}?collectionName=banner`" v-for="(n,i) of $store.state.banner" :key="n._id" tag="li">-->
    <!--          <img :src="n.banner" alt=""/>-->
    <!--          <div class="text-box">-->
    <!--            <h2>{{n.title}}</h2>-->
    <!--            <p>{{n.sub_title}}</p>-->
    <!--          </div>-->
    <!--        </router-link>-->
    <!--      </ul>-->
    <swiper :options="swiperOptions" class="clearfix swiper-ul" >
      <swiper-slide v-for="(n,i) of banner" :key="n._id" class="swiper-li" >
        <img :src="n.banner" alt="" @click="goDetail(n._id)"/>
        <div class="text-box">
          <h2>{{n.title}}</h2>
          <p>{{n.sub_title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!--    </div>-->


    <div class="content">
      <!--      <router-link :to="`/detail/${item._id}?collectionName=home`" v-for="(item,index) of home" :key="item._id" tag="section">-->
      <router-link :to="`/detail/${item._id}?collectionName=home`" v-for="(item,index) of $store.state.home"
                   :key="item._id" tag="section">
        <img :src="item.img" alt="">
        <div class="xs">
          <div class="timers">
            <h5>{{item.title}}</h5>
            <span>{{item.time | date('yyyy-mm-dd')}}</span>
          </div>
          <p>{{item.des}}</p>
        </div>
      </router-link>
    </div>

    <div class="common-footer">
      <span>我也是有底线的>>></span>
    </div>
  </div>
</template>

<script>
  import HeaderInput from "@/components/header-input/HeaderInput";
  import HeaderInputItem from "@/components/header-input/HeaderInputItem";
  import $ from 'jquery';// npm i xx -S
  import Swipe from '@/assets/js/swipe.js';

  export default {
    name: "Home",
    data() {
      return {
        home: [],
        banner: [],
        msg: '',
        swiperOptions: {
          pagination: 'swiper-pagination',
          loop: true,
          autoplay: 3000,
          effect: 'coverflow'
        }
      }
    },
    watch: {
      msg: {
        deep: true,
        immediate: true,
        handler: function (newValue) {
          // console.log(this.home)
          // console.log(this.home)
          // console.log(newValue.length)
          let x = this.home
          if (newValue.length === 0) {
            this.getData()
          } else {
            this.home = this.home.filter(ele => ele.title.includes(newValue))
          }
        }
      }
    },
    components: {
      HeaderInput,
      HeaderInputItem,
    },
    mounted() {
      this.getData()
      console.log(this.$store)
    },
    updated() {
      this.getSwiper()
      this.banner = this.$store.state.banner
    },
    methods: {
      getData() {
        // this.$axios({
        //   url:'/api/home',
        //   params:{_page:1,_limit:30}
        // }).then(res=>{
        //   this.home = res.data.data
        //   // console.log(res.data)
        //   // console.log(this.home.data)
        // })
        // this.$axios({
        //   url:'/api/banner',
        //   params:{_page: 1,_limit: 3}
        // }).then(res=>{
        //   this.banner = res.data.data
        //   // console.log(this.banner)
        // })


        this.$store.dispatch('HOME')
        this.$store.dispatch('BANNER')

      },
      getSwiper() {
        // var mySwipe = new Swipe($('.banner')[0], {
        //   auto: 2000,
        //   continuous: true,
        //   stopPropation: true,
        //   callback: function (index, element) {
        //     $('.banner ol li').removeClass('active');
        //     $('.banner ol li').eq(index).addClass('active');
        //   }
        // })

        // this.swiperOptions = {
        //   pagination: 'swiper-pagination',
        //   loop: true,
        //   autoplay: 3000,
        //   effect: 'coverflow'
        // }
      },
      goDetail(id){
        console.log('a')
        this.$router.push({name:"Detail",params:{id},query:{collectionName:'banner'}})
      }
    }
  }
</script>

<style scoped>
  .home {
    max-width: 6.4rem;
    margin: 0 auto;
  }

  /*.home .banner {*/
  /*  margin-top: 0.3rem;*/
  /*  position: relative;*/
  /*  overflow: hidden;*/
  /*  z-index: 1*/
  /*}*/
  .banner .swiper-ul {
    width: 6.4rem;
  }

  .swiper-ul {
    width: 6.4rem;
  }

  .swiper-li {
    width: 6.4rem;
  }

  .swiper-li > img {
    width: 6.4rem;
  }

  /*.banner ul li {*/
  /*  width: 6.4rem;*/
  /*  float: left;*/
  /*  position: relative;*/
  /*}*/

  /*.banner ul li img {*/
  /*  width: 100%;*/
  /*  height: 250px;*/
  /*  display: block;*/
  /*}*/

  /*.banner ul li .text-box {*/
  /*  width: 5.8rem;*/
  /*  padding: 0 0.3rem;*/
  /*  height: 1.24rem;*/
  /*  position: absolute;*/
  /*  left: 0;*/
  /*  bottom: 0;*/
  /*  color: #fff;*/
  /*  background: rgba(0, 0, 0, 0.5);*/
  /*}*/

  .text-box h2 {
    font-size: 0.3rem;
    font-weight: normal;
    margin-top: 0.22rem;
    line-height: 100%;
    margin-bottom: 0.22rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .text-box p {
    line-height: 100%;
  }


</style>