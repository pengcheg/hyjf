<template>
    <div class="login overflow-hidden">
       <x-icon type="ios-close-empty" size="70" class="login-back" @click="goBack"></x-icon>
      <article class="login-container">
        <group class="input-group input-group-1">
          <transition name="fade">
            <span v-if="valueUp.mobile" class="textup fadeInUp">手机号</span>
          </transition>
          <x-input  v-model="mobile" @on-change="checkLength" @on-focus="setEventTarget" mask="999 9999 9999" :required="true" :max="13" is-type="china-mobile" placeholder="手机号"  class="input-item" name="mobile"></x-input>
        </group>
        <group class="input-group">
          <transition name="fade">
            <p v-if="valueUp.password" class="textup fadeInUp">密码</p>
          </transition>
          <x-input :is-type="validatePwd" @on-change="checkLength" @on-focus="setEventTarget" :type="passwordType"  :required="true" placeholder="密码" :show-clear="false" v-model.lazy="password" :min="6" :max="12"  class="input-item" name="password">
            <img  slot="right" class="pwd-show-hide " @click="togglePwd" :src="passwordToggle?pwdImgUrl.hide:pwdImgUrl.show">
          </x-input>
        </group>
        <span class="forget-pwd" @click="login">忘记密码?</span>
        <x-button class="custom-button-submit" @click.native="login">登 录</x-button>
        <div class="get-prize">
          <img :src="getPrizeUrl" alt="">
          <span>注册领红包 <x-icon type="ios-arrow-right" size="30" class="arrow-right"></x-icon></span>
        </div>
      </article>

      <div v-transfer-dom>
       <alert v-model="loginStatus.mobileNull"   @on-show="onShow" @on-hide="onHide"> 手机号不能为空</alert>
      </div>
      <div v-transfer-dom>
        <alert v-model="loginStatus.passwordNull"   @on-show="onShow" @on-hide="onHide"> 密码不能为空</alert>
      </div>
      <div v-transfer-dom>
         <alert v-model="loginStatus.mobileFailure"   @on-show="onShow" @on-hide="onHide"> 手机号错误</alert>
      </div>
      <div v-transfer-dom>
          <alert v-model="loginStatus.passwordFailure"   @on-show="onShow" @on-hide="onHide"> 密码格式错误</alert>
      </div>
      <div v-transfer-dom>
           <alert v-model="loginStatus.login"   @on-show="onShow" @on-hide="onHide"> 成功！</alert>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {Cell,XButton,Alert,Group,XInput ,TransferDomDirective as TransferDom} from 'vux'
    import { mapGetters, mapActions } from 'vuex'
    export default{
        name: 'Login',
        data () {
            return {
              mobile: '',
              password:'',
              validatePwd:function(pwd){
                return {
                  valid: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(pwd),
                  msg:'111'
                };
              },
              pwdShow:true,
              pwdImgUrl:{
                show:'static/images/mine/login-pwd-show.png',
                hide:'static/images/mine/login-pwd-hide.png'
              },
              passwordType:"password",
              currentType:"",
              getPrizeUrl:"static/images/mine/get-prize.png",
              arrowRightUrl:"static/images/mine/arrow-right.png",
              //登录状态
              loginShow:false,
            }
        },
        directives: {
          TransferDom
        },
        components: {
            Alert,
            XInput,
            XButton,
            Group,
            Cell,
          },
        created () {
        },
        mounted () {
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].className="body-white";
        },
        beforeDestroy:function(){
          document.getElementsByTagName("body")[0].removeAttribute("class","body-white")
        },
        computed: {
          ...mapGetters({
            loginStatus: 'status',
            passwordToggle:'password',
            valueUp:'valueUp'
          }),
        },
        methods: {
            onHide () {
              console.log('on hide')
            },
            onShow () {
              console.log('on show')
            },
            /**
             * 密码是否可见
             **/
            togglePwd(){
                this.$store.dispatch('passwordToggle')
                this.passwordType = this.passwordType === "password"?"text":"password"
            },
            /**
             *  文本上移
             **/
             checkLength(val){
               this.$store.dispatch('valueUp',{
                 valueType:this.currentType,
                 valueLength:val.length
               })
             },
             setEventTarget(val,$event){
               this.currentType = $event.target.getAttribute("name")
             },
             /**
              *  返回上一页
              **/
             goBack(){
               this.$router.back()
             },
             /**
              *  登录
              **/
              login(){
                this.$store.dispatch('login',{
                  mobile:this.mobile,
                  password:this.password
                })
              }
        }
    }
</script>
<style lang="less">
    @import '../../assets/css/mine/login.less';
</style>
