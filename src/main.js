//入口文件
import Vue from 'vue'

//1.1导入路由的包
 import VueRouter from 'vue-router'
//  1.2安装路由
Vue.use(VueRouter)

//导入格式化时间插件
import  moment  from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
   return moment(dataStr).format(pattern)
})
//2.1导入vue-resource 
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//全局设置post时候表单数据格式的组织形式
Vue.http.options.emulateJSON = true;

//导入MUI样式
import './lib/mui/css/mui.min.css'
//导入扩展图标样式
import './lib/mui/css/icons-extra.css'
 
//按需导入Mint-ui组件   
import {Header,Swipe, SwipeItem ,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name,Button)


import {Tabbar} from 'mint-ui'
Vue.component(Tabbar.name,Tabbar)
//轮播图


//1.3导入自己的router.js模块
import router from './router.js'

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render: c=>c(app),
  router // 1.4挂载路由对象到路由上
})