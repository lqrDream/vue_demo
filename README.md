# vue_demo

###### 技术栈：

###### 			vue  + vue-router  +  vuex + axios + swiper + echarts

###### 后台数据：

###### 			mockjs 数据  

###### 主要功能：

+ 登录功能    																		---- 登录验证种token 才能获取数据 ，路由全局守卫 
+ 注册功能                                                                            ----  注册成功后直接跳入我的信息界面
+ 我的信息                                                                            ----  获取登录用户信息，显示图片和用户名
+ 主页界面                                                                            ----  swiper实现轮播图，点击发送进详情页面，watch监听input的输入
+ 消息界面                                                                            ----  统计页面未阅读信息个数，根据点击实现交互效果 vuex
+ 展示界面                                                                            ----  图片展示区，实现滚动无限加载，但是我给了一个最大值 
+ 个人中心界面                                                                    ----  展示用户个人信息，姓名、性别、生日、电话
+ 用户修改界面                                                                    ----  可以对个人用户信息进行修改
+ 新闻详情界面                                                                    ----  根据点击的对象显示，当前点击对象的详情信息 
+ echarts 用户浏览量界面                                                  ----  根据每个展示区图片展示用户浏览量



###### 项目布局：

```
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── assets                                  // 静态资源存放
│   │   ├── img                                 // img文件
│   │   ├── css                                 // css文件
│   │   ├── js                                  // js文件
│   ├── components                              // 组件
│   │   ├── loading.vue                         // load组件
│   │   ├── MainTab.vue                         // tabbar封装
│   │   ├── header-input                        // input组件封装
│   │   │   ├── HeaderInput.vue                 
│   │   │   ├── HeaderInputItem.vue            
│   │   ├── tabbar                              // tabber组件封装
│   │   │   ├── TabBar.vue                 
│   │   │   ├── TabBarItem.vue 
│   ├── filters                                 // 时间过滤处理文件
│   │   ├── filterDate.js                       // 时间处理时间传入格式
│   │   ├── filterZero.js                       // 时间小于10的处理文件
│   │   ├── index.js                            // 导出时间过滤器主文件
│   ├── pages                            		
│   │   ├── detail                              
│   │   │   ├── Detail.vue                      // 详情组件
│   │   ├── home                             
│   │   │   ├── Home.vue                        // 首页
│   │   ├── login                       		
│   │   │   ├── Login.vue                       // 登录页
│   │   │   ├── Reg.vue                         // 注册页   
│   │   ├── messages                        
│   │   │   ├── Messages.vue                    // 消息页   
│   │   ├── profile                        
│   │   │   ├── Profile.vue                     // 我的资料页
│   │   │   ├── User.vue					    // 个人中心页
│   │   │   ├── UserUpdate.vue                  // 用户信息修改页
│   │   ├── show         
│   │   │   ├── Echart.vue						// 用户流量展示页                 
│   │   │   ├── Show.vue      					// 展示页
│   │   ├── NoPage.vue                        	// 错误路由页
│   │   ├── tabbar                              // tabber组件封装
│   ├── router
│   │   ├── index.js							// 路由规则
│   │   ├── axios.js							// axios数据拦截和请求
│   ├── store                                   // vuex的状态管理
│   │   ├── state.js                           	// 配置state
│   │   ├── actions.js                          // 配置actions
│   │   ├── index.js                            // 引用vuex，创建store
│   │  	├── mutations.js                        // 配置mutations
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── index.html                                  // 入口html文件
...
```



