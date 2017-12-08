/**
 * Created by liulingling on 2017/9/27.
 * GET POST 封装
 */
import Axios from './axios-custom'
export const HttpClient = {
  /**
   * get 方法
   */
  get (url) {
    var config = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    };
    return Axios.get(url, config);
  },

  /**
   * post 方法
   */
  post (url, params) {
    var config = {
      headers: {'Content-Type': 'application/json'},
      params: params
  };
    return Axios.post(url, {}, config);
  }
}
