/**
 * Created by liulingling on 2017/9/27.
 * axios请求全局拦截器
 */
import axios from 'axios'
axios.defaults.timeout = 50000

/**
 * axios全局拦截器
 * 状态请求成功判断
 */
axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})
export default axios
