<template>
  <div class="message">
    <header-input>
      <header-input-item path="/home">
        <div slot="input-main">
          <label for="search-x"><input type="search" id="search-x" placeholder="请输入内容" v-focus></label>
        </div>
      </header-input-item>
    </header-input>
    <div class="content">
      <button @click="setRead">全部已读</button>
      <section v-for="(item,index) of message" :key="item._id">
        <img :src="item.img" alt="">
        <div class="xs" @click="changeRead(item._id)">
          <div class="timers">
            <h6>{{item.title}}</h6>
            <span :style="getColor(item.read)">{{setText(item.read)}}</span>
          </div>
          <p>{{item.des}}</p>
        </div>
      </section>
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
    name: "Message",
    data() {
      return {
        message: [],
        readList: ''
      }
    },
    components: {
      HeaderInput,
      HeaderInputItem
    },
    mounted() {
      this.getMessage()
    },
    methods: {
      getMessage() {
        this.$axios({
          url: '/api/message',
          params: {
            _page: 1,
            _limit: 20
          }
        }).then(res => {
          this.message = res.data.data
          console.log(this.message)
          console.log(this.message.filter(ele => ele.read === false).length)
          this.readList = this.message.filter(ele => ele.read === false).length
          // this.$root.read = this.readList

          this.$store.state.read = this.readList
        })
      },
      setText(val) {
        if (val === false) {
          return '未阅读'
        } else {
          return '已阅读'
        }
      },
      getColor(val) {
        return val === false ? {color: 'red'} : {color: 'green'}
      },
      setRead() {
        this.message.map(ele => {
          ele.read = 1
        })
        this.getNewRead()
        this.$store.state.read = 0
      },
      changeRead(id) {

        this.getNewRead()
        let x = this.message.find((v, i, a) => {
          return v._id === id
        })
        console.log(x)
        console.log(x.read)
        if(!x.read){
          this.$store.commit('readDeincreased')
        }
        this.message.filter(ele => {
          if (ele._id === id) {
            ele.read = true
          }
        })
        // if(this.message.some(ele=>(ele._id === id))&&this.message.find(id)){
        //   this.$store.commit('readDeincreased')
        // }
      },
      getNewRead() {
        // this.readList = this.message.filter(ele=>ele.read === false).length
        // // console.log(this.readList)
        // this.$root.read = this.readList

        this.readList = this.message.filter(ele => ele.read === false).length
        this.$store.read = this.readList
      }
    }
  }
</script>

<style scoped>

  #search-x {
    margin: 5px;
    width: 97%;
  }

  .xs .timers span {
    color: red;
    font-size: 0.24rem;
    margin-right: 0.30rem;
  }
</style>