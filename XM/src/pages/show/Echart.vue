<template>
  <div>
    <div id="main-input">
      <div class="back-on" @click="$router.go(-1)">&lt;</div>
    </div>
    <div ref="main" style="width:6rem;height:5rem;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: "Echarts",
    data() {
      return {
        detail: {}
      }
    },
    mounted() {
      let myChart = echarts.init(this.$refs.main);
      let option = {
        title:{
          text:'阅读量'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [],
          type: 'line'
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);


      let id = this.$route.params.id;
      let collectionName = this.$route.query.collectionName;
      // console.log(id)
      this.$axios({
        url: `/api/${collectionName}/${id}`
      }).then(
        ({data}) => {
          console.log(data.data.content)
          myChart.setOption({
            series: [{
              data: data.data.content,
              type: 'line'
            }]
          });
        }
      )
    }
  }
</script>

<style scoped>
  .content {
    max-width: 6.4rem;
    margin: 0 auto;
    margin-top: 0.6rem;
    background: #f2f4f5;
    padding-bottom: 0.85rem;
  }

  .content .header {
    padding: 0.39rem 0.28rem 0.15rem 0.28rem;
    height: auto;
    background: none
  }

  .header h2 {
    float: left;
    margin-right: 0.18rem;
  }

  .header p {
    float: left;
    margin-top: 0.18rem;
    font-size: 0.3rem;
  }

  .content .cont {
    padding: 0 0.38rem;
    color: #494d4d;
  }

  .cont h3 {
    font-size: 0.4rem;
    line-height: 0.6rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #494d4d;
  }

  .cont .time {
    height: 0.24rem;
    line-height: 0.24rem;
    margin: 0.26rem 0;
  }

  .time p {
    float: left;
    position: relative;
  }

  .time span {
    width: 0.33rem;
    height: 0.32rem;
    position: absolute;
    top: -0.02rem;
    right: -0.35rem;
  }

  .time span img {
    width: 100%;
    height: 100%;
  }

  .cont .text-box {
    font-size: 0.25rem;
  }

  .text-box p {
    line-height: 0.45rem;
    margin-bottom: 0.1rem;
  }

  .detail_banner {
    width: 100%;
  }

  .detail_banner img {
    width: 100%;
  }
</style>