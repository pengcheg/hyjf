#EnrollmentEasy1.0

## Build Setup
``` bash
npm install
npm run dev
npm run build
npm run build --report
```

#(一) api url请求接口地址存放：
  按照utils中 api.js文件格式存放和获取。

#(二) 全局loading：
  引入utils中 loading.js文件 loader.show和loader.hide。

#(三) http axios 网络请求 引入utils中http-client.js：
#get（post）方式
  //或者：this.$http.get('apiUrl').then
  HttpClient.get('apiUrl').then((res) => {
      if (res.data) {
          console.log(JSON.stringify(res.data));
      } else {
        console.log('empty');
      }
    }, (error) => {
      console.log('fail')
    })

#(四) 微信jssdk分享 ，引入utils中wechat.js：
  1、微信配置
  wx.config({
   debug: false,
   appId: '',
   timestamp: ,
   nonceStr: '',
   signature: '',
   jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone'
     ]
   })
  2、分享
  wxShareConfig({title: '', desc: '', link: '', imgUrl: ''}, function () {
    console.log('success')
    }, function () {
     console.log('fail')
  })
#(五) 代码规范
1）文件夹的建立要规范，pages跟css里面的文件结构要统一起来
2)html/js/css模块统一加注释，模块跟方法用/*  */,变量要用//
3）js里面的每个方法要加注释/*  */，变量要用//
4）变量命名：js里面的临时变量都用驼峰式，比如userId
           css里面的class命名都小写，并且用-链接，比如user-id
5)函数前面要加空行，关键字之间的前后要加空格

#(六) 页面跳转
注意：
	（一）页面跳转不要用href 形式跳转，可以使用<router-link> 创建 a 标签跳转 或是 使用router实例跳转，如下：
	1、编程式：this.$router.push({name: 'UpdateShopInfo'}),尽量使用路由的name做跳转，因为后期路由改了path后不用再改代码
	2、声明式：<code><router-link :to="{ name: 'UpdateShopInfo'}">跳转</router-link></code>
	（二）路由传参
	1、编程式：this.$router.push({name: 'UpdateShopInfo', params: {flag: flag}})
	2、声明式：<code><router-link :to="{ name: 'UpdateShopInfo', params: { flag: flag }}">跳转</router-link></code>



