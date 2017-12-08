/**
 * Created by liulingling on 2017/9/27.
 * Actions （提交mutation，包含异步操作）
 */
import {HttpClient} from '../utils/http-client'
import api from '../utils/api'

export const getShopTabList = ({commit}) => {
  HttpClient.get(api.getTestApi(1)).then((res) => {
    if (res.data) {
      console.log(res.data)
      commit('setShopTabList', res.data)
    } else {
      console.log('empty');
    }
  }, (error) => {
    console.log('fail')
  })
}
