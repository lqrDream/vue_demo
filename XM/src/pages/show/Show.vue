<template>
  <div>
    <header-input>
      <header-input-item path="/home">
        <div slot="input-left" @click="$router.replace('/home')">&lt;</div>
        <div slot="input-main">
          <label for="search-x"><input type="search" id="search-x" placeholder="请输入内容" v-focus></label>
        </div>
        <div slot="input-right">
          <router-link to="/login">三</router-link>
        </div>
      </header-input-item>
    </header-input>

    <div class="contain">
      <router-link v-for="(item,index) in show" :key="item._id" tag="div"
                   :to="`/echart/${item._id}?collectionName=show`">
        <img :src="item.img" alt="">
        <span>{{item.title}}</span>
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

  export default {
    name: "Show",
    components: {
      HeaderInput,
      HeaderInputItem
    },
    data() {
      return {
        show: []
      }
    },
    mounted() {
      this.getShow()
      window.addEventListener('scroll', this.onScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
      getShow() {
        this.$axios(
          {
            url: '/api/show',
            params: {
              _limit: 31
            }
          }
        ).then(res => {
            // console.log(res.data)
            this.show = res.data.data
          }
        )
      },
      onScroll(e) {
        if (this.loading || this.allLoaded) return;
        let top = document.documentElement.scrollTop || document.body.scrollTop; // 滚动条在Y轴上的滚动距离
        let vh = document.compatMode == 'CSS1Compat' ? document.documentElement.clientHeight  : document.body.clientHeight ; // 浏览器视口的高度
        let height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); // 文档的总高度
        if (top + vh >= height) { // 滚动到底部
          console.log(this.show[this.show.length - 1].id)
          let lastBox = this.show[this.show.length - 1].id
          this.$axios(
            {
              url: '/api/show',
              // query: {
              //   id: lastBox
              // },
              params: {
                id_gte: lastBox,
                _limit: 10
              }
            }
          ).then(res => {
              // console.log(res.data)
              console.log(this.show)
              this.show = this.show.concat(res.data.data)
              //   this.show.push(res.data.data)
              // res.data.data.forEach(ele => this.show.push(ele))
              console.log(this.show)
            }
          ) // 如果已经滚到底了 获取数据
          console.log('aaa')
        }
      }
    },
    computed: {
      showLength() {
        return this.show.length === 89
      }
    }
  }
</script>

<style scoped>
  .contain {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: auto;
  }

  .contain div {
    width: 3.15rem;
    height: 3.75rem;
    border: 0.01rem solid #cccccc;
    margin-top: 0.1rem;
    background-color: #ffffff;
  }

  .contain div img {
    display: block;
    width: 3.12rem;
    height: 3.14rem;
  }

  .contain div span {
    font-size: 0.24rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.1rem;
  }
</style>