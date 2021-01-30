module.exports = {
  devServer:{
    //设置代理
    proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api': { //axios访问 /api ==  target + /api
        target: 'http://127.0.0.1:3333',
        changeOrigin: true, //创建虚拟服务器
        ws: true, //websocket代理
      }
    }
  }
}