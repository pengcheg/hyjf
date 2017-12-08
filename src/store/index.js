/**
 * Created by liulingling on 2017/9/27.
 * VUEX状态管理
 */

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import login from './modules/login'

Vue.use(Vuex)

const state = {
  //加载框
  isLoading: false,
  loadingText: '加载中...',
  //店铺
  shopTabList: [],
  shopTabValue: 0,
  classifyList: []
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules:{
    login
  },
  plugins: [createLogger()],
  strict: false
})
