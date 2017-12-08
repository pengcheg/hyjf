/**
 * Created by liulingling on 2017/9/27.
 */
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import router from './router'
import Axios from './utils/axios-custom'
import store from './store'
import { WechatPlugin } from 'vux'


Vue.use(WechatPlugin)
Vue.prototype.$http = Axios
 FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
