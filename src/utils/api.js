/**
 * Created by liulingling on 2017/9/27.
 * api接口地址
 */
const _baseApi = 'https://api.imjad.cn/cloudmusic'
export default {

  //测试api
  getTestApi (id) {
    return _baseApi + '/?id=' + id
  },

  //登录api
  getLoginApi (userName, password) {
    return _baseApi + '?userName' + userName + '&password=' + password
  },
}
