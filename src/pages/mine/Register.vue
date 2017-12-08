<template>
    <div class="register">
        <myHeader title="注册" :showBack="true"></myHeader>
        <showMsg v-show="showTishi" :showMsg="showMsg"></showMsg>
        <article class="register-container">
            <p class="please-check-msg" v-show="pleasecheck">短信验证码已经发送到<span>{{yournum}}</span>，请查收</p>
            <div class="register-wrap">
                <div v-show="firstStep">
                    <div class="register-wrap-item">
    	                <group><x-input type="tel" placeholder="请输入手机号"  v-model="phonenum" :max="11"></x-input></group>
                    </div>
                    <button class="next-btn" @click="inputNum">下一步</button>
    	            <p class="go-to-login">已有账号？<a href="#">去登录</a></p>
                </div>
                <div v-show="secondStep">
                    <div class="register-wrap-item" >
                        <group><x-input keyboard="number" placeholder="请输入验证码"  v-model="yzm" :max="6" :show-clear="false"></x-input></group>
                        <button class="send-yzm" @click="getCode" :disabled="!showClock">
                            <span v-if="showClock">获取验证码</span>
                            <span v-else class="count">重新获取 ({{count}}s)</span>
                        </button>
                    </div>
                    <button class="next-btn" @click="inputYzm">下一步</button>
                </div>
                <div v-show="thirdStep">
                    <div class="register-wrap-item" >
                        <group><x-input :type="pwdType" placeholder="设置6-20位的数字字母组合密码"  v-model="password" :max="20" :show-clear="false"></x-input></group>
                        <span class="icon-sign" @click="eyeChange">
                            <img v-if="willShow" src="static/images/mine/icon-eyes-close.png" alt=""/>
                            <img v-else src="static/images/mine/icon-eyes-open.png" alt="" />
                        </span>
                    </div>
                    <div class="register-wrap-item" >
                        <group><x-input type="number" placeholder="推荐人手机号/推荐码（非必填）" v-model="tuijian"></x-input></group>  
                    </div>
                    <button class="next-btn" @click="inputPsw">完成注册</button>
                    <p class="go-to-login">注册即代表同意<a href="#">《协议条款》</a></p>
                </div>
                <div v-show="fourthStep" class="register-result">
                    <img src="static/images/mine/register-success.png" alt="">
                    <h3 class="result-h3">恭喜您，注册成功！</h3>
                    <p class="result-p"><i>888</i>元投资红包已发至您的账户</p>
                    <button href="#" class="next-btn">马上开户体验</button>
                    <p class="go-to-login"><a href="#">我是企业用户&gt</a></p>
                </div>                  
            </div>
        </article>
        <div class="register-bottom-bg">
            <img src="static/images/mine/register-bottom-bg.jpg" alt="">
        </div>
    </div>
</template>

<style>
    *{margin:0;padding:0}
    .register-bg>img{display:block;width:100%}
    .register-container{position: relative;}
    .register-wrap{
        width:8.4057971rem;
        padding-top:1.38486312rem;
        font-size: .36231884rem;
        margin-left: auto;
        margin-right: auto;
    }
            
    .register-wrap-item{position: relative;border-bottom: 1px solid #cccccc}
    .please-check-msg{
        width: 100%;
        height: .82125604rem;
        line-height: .82125604rem;
        background: #ffddce;
        color: #ff996e;
        text-align: center;
        font-size: .33816425rem;
        position: absolute;
        top:0;
    }

    .next-btn{
        width: 100%;
        display: block;
        padding: 0;
        margin: 0 auto;
        outline:none;
        text-align: center;
        border-style: hidden;
        border-color: #fc6621;
        background: #fc6621;
        color: #ffffff;
        font-size: .36231884rem;
        border-radius: .1610306rem;
        -moz-border-radius: .1610306rem;
        -webkit-border-radius: .1610306rem;
        margin-top: .76489533rem;
        height: 1.12721417rem;
        line-height: 1.12721417rem;
    }

    .go-to-login{
        text-align: center;
        color: #999999;
        margin-top: .36231884rem;
    }
    .go-to-login a{
        color: #fc6621
    }
    .send-yzm{
        background: transparent;
        outline: none;
        border-width: 0;
        font-size: .31400966rem;
        position: absolute;
        top: 0;
        right:.1610306rem;
        padding: .51867955rem 0;
        color: #999999;
    }     
    .send-yzm span{border-left: solid 1px #d9d9d9;padding-left: .17713366rem;}
    .icon-sign{
        display: block;
        width: .48309179rem;
        position: absolute;
        right: .23610306rem;
        top:.56283414rem;

        
    }
    .icon-sign>img{display: block;width: 100%;}  
    .register-wrap .weui-cell{padding: .24154589rem .1610306rem}
    .register-wrap .weui-cells:before{border:0}
    .register-wrap .weui-cells:after{border:0}
    .register-wrap .weui-cells{margin-top:0;
        background-color: #fffefc;
        font-size: .36231884rem;
    }
    .register-wrap .weui-input{height:.84541063rem;line-height:.84541063rem;}
    .register-wrap .weui-icon-clear{font-size:.44283414rem}
    input::-webkit-input-placeholder{color:#b5b5b5;}
    input:-moz-placeholder{color:#b5b5b5;}
    .send-yzm span{border-left: solid 1px #d9d9d9;padding-left: 10px}
    .register-result{text-align: center;padding-top:1.08695652rem;}
    .register-result>img{display:block;width: 5.10466989rem;margin:0 auto; }
    .result-h3{color: #fc6621;font-size:.48309179rem;font-weight: normal;margin-top:.92592593rem;}
    .result-p{font-size: .36231884rem;color: #323232;margin-top:.1610306rem;}
    .result-p i{color: #fc6621;font-style: normal;}
    .register-bottom-bg{width: 10rem;position: absolute;bottom: 0;left: 0;right: 0;margin:auto;}
    .register-bottom-bg img{display: block;width: 100%}
    .show-erro{
        padding:.32206119rem;
        background: rgba(0,0,0,.8);
        color: #fff;
        position: absolute;
        left:50%;
        
        margin:auto;
        top:.24154589rem;
        z-index: 333;
         border-radius: .1610306rem;
        -moz-border-radius: .1610306rem;
        -webkit-border-radius: .1610306rem;
    }  
    .body-white{background:#ffffff;position: relative;}   
    .body-white .weui-tab{position:static;}      
</style>
<script>
import {HttpClient} from './../../utils/http-client'
import {Flexbox,FlexboxItem,Group,XInput } from 'vux'
import myHeader from './../../components/header/MyHeader.vue'
import showMsg from './../../components/showmsg/ShowMsg.vue'
    export default{
        name:'register',
        ready () {
            setTimeout(() => {
                this.show = true
            }, 10)
        },
        data(){
        	return {
        		firstStep:true,
                secondStep:false,
                thirdStep:false,
                fourthStep:false,
                showTishi:false,
                pleasecheck:false,
                willShow:true,
                showClock: true,
                pwdType:"password",
                showMsg: '',
                phonenum: '',
                yzm: '',
                password:'',
                tuijian:'',
		        count: '',
		        timer: null  
        	}

        },
        components: {
        	myHeader,
            showMsg,
            Group, 
            XInput,
            Flexbox,
            FlexboxItem
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].className="body-white";
        },
        beforeDestroy:function(){
          document.getElementsByTagName("body")[0].removeAttribute("class","body-white")
        },
        methods:{
        	hideTishi:function(){
                setTimeout(() => {
                    this.tishi=""
                    this.showTishi=false
                },1000)
            },
            pleaseCheck:function(){
                this.pleasecheck = true
                setTimeout(() => {
                    this.pleasecheck=false
                },2000)
            },
            inputNum:function(){

            	const numCheck = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-3,5-9]{1})|(17[0,1,3,5-8]{1})|(18[0-9]{1}))+\d{8})$/
            	if(this.phonenum == ''){
                    this.showTishi = true
                    this.showMsg = "请输入手机号"
                    this.hideTishi()
            	}else if(!numCheck.test(this.phonenum)){
            		this.showTishi = true
                    this.showMsg = "请输入正确的手机号"
                    this.hideTishi()
            	}else{
            		this.secondStep = true
                    this.firstStep = false
                }  
            },
            inputYzm:function(){
            	if(this.yzm == ''){
            		 this.showTishi = true
                    this.showMsg = "请输入验证码"
                    this.hideTishi()
            	}else{

                    let data1 = {'phonenum':this.phonenum,'yzm':this.yzm}
                    this.$http.post('/someUrl', data).then((res) => {
                        // 0输入的验证码有误，-1系统错误
                        if(res.data == 0){
                            this.showTishi = true
                            this.showMsg = "请输入正确的验证码"
                            this.hideTishi()  
                        }else if(res.data == -1){
                            this.showTishi = true
                            this.showMsg = "系统错误，请重新获取"
                            this.hideTishi()  
                            this.endClock()
                        }else{
                             // 响应成功回调
                            this.thirdStep = true
                            this.secondStep = false
                        }
                       
                    }); 
            		
            	}
            },
            inputPsw:function(){
            	const pswCheck = /^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z]{1}[0-9A-Za-z]{5,16}$/
                 if(this.password == ''){
                    this.showTishi = true
                    this.showMsg = "请输入密码"
                    this.hideTishi()
            	}else if(!pswCheck.test(this.password)){
                    this.showTishi = true
                    this.showMsg = "设置6-20位的数字字母组合密码"
                    this.hideTishi()

            	}else{

                    let data2 = {'phonenum':this.phonenum,'tuijian':this.tuijian,'password':this.password}
                    this.$http.post('/someUrl', data).then((res) => {

                         if(res.data2 == 0){
                            this.showTishi = true
                            this.showMsg = "请输入正确的推荐码"
                            this.hideTishi()  
                        }else if(res.data == -1){
                            this.showTishi = true
                            this.showMsg = "系统错误，请重试"
                            this.hideTishi()  
                            this.endClock()
                        }else{
                             // 响应成功回调
                            this.fourthStep = true
                            this.thirdStep = false
                        }
                    }); 
            		
            	}   
            },
            eyeChange:function(){
                this.willShow=!this.willShow;
                this.pwdType = this.pwdType==='password'?'text':'password'
            },
            starClock:function(){
                if(!this.timer){
                     this.showClock = false;
                     this.count = 60;
                    this.timer = setInterval(()=>{
                        if(this.count>0 && this.count<= 60){
                            this.count--
                        }else{
                            this.showClock = true
                            clearInterval(this.timer)
                            this.timer = null
                        }
                     },1000)
                 }
                     
            },
            endClock:function(){
                this.showClock = true
                clearInterval(this.timer)
                this.timer = null
            },
            getCode:function(){
                this.starClock()
                let data3 = {'phonenum':this.phonenum}
                this.$http.post('/someUrl', data).then((res) => {

                    if(res.data3 == 0){
                        this.showTishi = true
                        this.showMsg = "验证码发送失败"
                        this.hideTishi()   
                        this.endClock()
                    }else{
                        // 响应成功回调
                        this.yournum = this.phonenum
                        this.pleaseCheck()
                    }
                });  
            }
        }
    }
</script>

