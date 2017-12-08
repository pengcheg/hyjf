<template>
    <div class="index overflow-hidden">
        <article class="container">
            <article class="mine-top">
                <div class="mine-top-bg">
                    <div class="mine-header-area">
                        <img src="../../../static/images/mine/header-left.png" class="header-left">
                        <img src="../../../static/images/mine/header-left.png" class="header-right">
                        <div class="mine-header" @click="goUserCenter">
                            <img :src="userInfo.userImg"/>
                        </div>

                    </div>
                    <p class="mine-name">
                        {{userInfo.userName}}
                    </p>
                    <p class="mine-profit">
                        累计收益 {{userInfo.totalIncome}} 元
                    </p>
                    <Information :hasMsg="userInfo.hasMsg"></Information>
                </div>
                <div class="mine-info">
                    <div class="mine-info-item no-left-line">
                        <p>
                            <span class="span-info-text">可用余额</span>
                            <img src="../../../static/images/mine/refresh-data.png" class="refresh-data-img">
                            <img src="../../../static/images/mine/orange-eye.png" class="orange-eye-img">
                        </p>
                        <p>
                            <countup :end-val="userInfo.availableBalance" :decimals="2" class="mine-info-price"></countup>
                            <span class="mine-info-text">元</span>
                        </p>
                    </div>
                    <div class="mine-info-item">
                        <p>
                            <span class="span-info-text">资产总额</span>
                        </p>
                        <p>
                            <countup :end-val="userInfo.totalAssets" :decimals="2" class="mine-info-price"></countup>
                            <span class="mine-info-text">元</span>
                        </p>
                    </div>
                    <p class="mine-op-btn">
                        <button class="tixian-btn">提现</button>
                        <button class="chongzhi-btn">充值</button>
                    </p>
                </div>
            </article>
            <article class="mine-center">
                <group>
                    <cell>
                        <span slot="title" class="cell-span">
                            <img slot="icon" class="cell-icon" src="../../../static/images/mine/hfje.png">
                            <span class="cell-title">汇付金额</span>
                            <button class="cell-btn">提现</button>
                            <span class="cell-price">元</span>
                            <span class="cell-text">{{userInfo.payToBalance}}</span>
                        </span>
                    </cell>
                    <cell is-link link="/userCenter">
                        <span slot="title" class="cell-span">
                            <img slot="icon" class="cell-icon" src="../../../static/images/mine/jymx.png">
                            <span class="cell-title">交易明细</span>
                        </span>
                    </cell>
                    <cell is-link link="/userCenter">
                        <span slot="title" class="cell-span">
                            <img slot="icon" class="cell-icon" src="../../../static/images/mine/wdzq.png">
                            <span class="cell-title">我的债权</span>
                        </span>
                    </cell>
                </group>
                <group class="mine-group">
                    <cell is-link link="/userCenter">
                        <span slot="title" class="cell-span">
                            <img slot="icon" class="cell-icon" src="../../../static/images/mine/wdyhq.png">
                            <span class="cell-title">我的优惠券</span>
                            <span class="cell-price right-price">张</span>
                            <span class="cell-text">{{userInfo.myCoupon}}</span>
                        </span>
                    </cell>
                    <cell is-link link="/userCenter">
                        <span slot="title" class="cell-span">
                            <img slot="icon" class="cell-icon" src="../../../static/images/mine/wdjl.png">
                            <span class="cell-title">我的奖励</span>
                            <span class="cell-price right-price">邀请好友</span>
                        </span>
                    </cell>
                    <cell is-link link="/userCenter">
                        <span slot="title" class="cell-span">
                            <img slot="icon" class="cell-icon" src="../../../static/images/mine/yhk.png">
                            <span class="cell-title">银行卡</span>
                        </span>
                    </cell>
                    <cell is-link link="/userCenter">
                        <span slot="title" class="cell-span">
                            <img slot="icon" class="cell-icon" src="../../../static/images/mine/sz.png">
                            <span class="cell-title">设置</span>
                        </span>
                    </cell>
                </group>

            </article>
        </article>
    </div>
</template>
<script type="text/ecmascript-6">
    import {HttpClient} from './../../utils/http-client'
    import Information from './../../components/Information.vue'
    import {Cell, Group, Badge,Countup} from 'vux'
    export default{
        name: 'Mine',
        ready () {
            setTimeout(() => {
                this.show = true
            }, 10)
        },
        data () {
            return {
                userInfo:{
                    userImg:'../../../static/images/mine/user-head-img.jpg',
                    userName:'郑先生',
                    totalIncome:200.00,
                    availableBalance:10.00,
                    totalAssets:10000.00,
                    payToBalance:200.00,
                    myCoupon:12,
                    hasMsg:true
                }
            }
        },
        components: {Cell, Group, Badge,Countup,Information},
        created () {
        },
        mounted () {
        },
        methods: {
            /**
             * 点击刷线方法执行
             **/
            refreshIncome: function () {
                this.$router.back();
            },
            /**
             * 跳转到用户中心
             * */
            goUserCenter:function () {
                this.$router.push('/userCenter');
            },
            toLogin:function(){
              this.$router.push('/Login')
            },
        }
    }
</script>
<style scoped>
    @import '../../assets/css/mine/mine.css';
</style>
