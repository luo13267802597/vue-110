//入口文件
import Vue from 'vue'
//导入MUI样式
import './lib/mui/css/mui.min.css'
 
//按需导入Mint-ui组件   
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

import {Tabbar} from 'mint-ui'
Vue.component(Tabbar.name,Tabbar)

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render: c=>c(app)
})