<template>
    <div class="index overflow-hidden">
        <myHeader title="项目详情" :showBack="true"></myHeader>
        <scroller>
            <article class="container">
                <article class="project-top">
                    <div class="project-items">
                        <div class="top-item width-35">
                            <p class="top">
                                <countup :end-val="productInfo.yearProfitRate" :decimals="2" class="top-big color-orange"></countup>
                                <span class="top-small color-orange">%</span>
                            </p>
                            <p class="bottom">
                                <span class="top-text">预计年化收益率</span>
                            </p>
                            <label class="top-small color-orange tip-up">+{{productInfo.yearIncreaseRate}}%</label>
                        </div>
                        <div class="top-item width-20">
                            <p>
                                <span class="top-big">{{productInfo.projectTerm}}</span>
                                <span class="top-small">个月</span>
                            </p>
                            <p>
                                <span class="top-text">项目期限</span>
                            </p>
                        </div>
                        <div class="top-item width-40">
                            <p>
                                <countup :end-val="productInfo.canInvestAmount" :decimals="2" class="top-big"></countup>
                                <span class="top-small">元</span>
                            </p>
                            <p>
                                <span class="top-text">可投金额</span>
                            </p>
                        </div>
                    </div>
                    <div class="project-time">
                        <span>{{productInfo.openBidTime}} 开标</span>
                    </div>
                </article>
                <article class="project-center">
                    <div class="project-center-item">
                        <span class="item-title">项目编号：</span>
                        <span class="item-content">{{productInfo.projectNumber}}</span>
                    </div>
                    <div class="project-center-item">
                        <span class="item-title">融资总额：</span>
                        <span class="item-content">{{productInfo.financeAmount}}元</span>
                    </div>
                    <div class="project-center-item">
                        <span class="item-title">还款方式：</span>
                        <span class="item-content">{{productInfo.repayWay}}</span>
                    </div>
                </article>
                <article class="project-detail">
                    <tab :line-width="1" custom-bar-width="1.2rem" active-color='#fe7e00' bar-active-color="#fe7e00">
                        <tab-item selected @on-item-click="changeDetailTab(1)">产品详情</tab-item>
                        <tab-item @on-item-click="changeDetailTab(2)">投资记录</tab-item>
                        <tab-item @on-item-click="changeDetailTab(3)">常见问题</tab-item>
                    </tab>
                    <div class="tab-swiper vux-center" v-if="tabIndex==1">
                        <scroller>
                            <div class="pro-detail-item item-hzjg">
                                <p class="item-title">合作机构</p>
                                <p class="item-content">借款企业是一家集客房、餐饮、会议、康娱等为一体的综合性涉外酒店，企业成立于04年。</p>
                            </div>
                            <div class="pro-detail-item item-dywxx">
                                <p class="item-title">抵押物信息</p>
                                <p class="item-content">
                                    <img src="../../../static/images/invest/xx-phone.png">
                                    *******************
                                    <img src="../../../static/images/invest/xx-phone.png">
                                    *******************
                                    <img src="../../../static/images/invest/xx-phone.png">
                                    ******************
                                </p>
                            </div>
                            <div class="pro-detail-item item-czlc">
                                <p class="item-title">操作流程</p>
                                <p class="item-content">
                                    <img src="../../../static/images/invest/xx-phone.png">
                                    *******************
                                    <img src="../../../static/images/invest/xx-phone.png">
                                    *******************
                                    <img src="../../../static/images/invest/xx-phone.png">
                                    ******************
                                </p>
                            </div>
                            <div class="pro-detail-item item-bxbz">
                                <p class="item-title">本息保障</p>
                                <p class="item-content">
                                    <img src="../../../static/images/invest/xx-phone.png">
                                    *******************
                                    <img src="../../../static/images/invest/xx-phone.png">
                                    *******************
                                    <img src="../../../static/images/invest/xx-phone.png">
                                    ******************
                                </p>
                            </div>
                            <div class="pro-detail-item item-fcdy">
                                <p class="item-title">房产抵押</p>
                                <p class="item-content">
                                    <x-table full-bordered style="background-color:#fff;">
                                        <thead class="item-thead">
                                        <tr style="background-color: #f8f8f8">
                                            <th>房产类型</th>
                                            <th>建筑面积（m）</th>
                                            <th>抵押价值</th>
                                        </tr>
                                        </thead>
                                        <tbody class="item-tbody">
                                        <tr>
                                            <td>住宅</td>
                                            <td>100</td>
                                            <td>100000</td>
                                        </tr>
                                        <tr>
                                            <td>商业用房</td>
                                            <td>500</td>
                                            <td>5000000</td>
                                        </tr>
                                        </tbody>
                                    </x-table>
                                </p>
                            </div>
                            <div class="pro-detail-item item-cldzy last-no-line">
                                <p class="item-title">车辆抵/质押</p>
                                <p class="item-content">
                                    <x-table full-bordered style="background-color:#fff;">
                                        <thead class="item-thead">
                                        <tr style="background-color: #f8f8f8">
                                            <th>车辆品牌</th>
                                            <th>型号</th>
                                            <th>评估价（元）</th>
                                        </tr>
                                        </thead>
                                        <tbody class="item-tbody">
                                        <tr>
                                            <td>奔驰</td>
                                            <td>C30</td>
                                            <td>50000</td>
                                        </tr>
                                        <tr>
                                            <td>奔驰</td>
                                            <td>C30</td>
                                            <td>50000</td>
                                        </tr>
                                        </tbody>
                                    </x-table>
                                </p>
                            </div>
                        </scroller>
                    </div>
                    <div class="tab-swiper vux-center" v-if="tabIndex==2">
                        <scroller>
                            <div>
                                <h2>这里是投资记录</h2>
                            </div>
                        </scroller>
                    </div>
                    <div class="tab-swiper vux-center" v-if="tabIndex==3">
                        <scroller>
                            <div>
                                <h2>这里是常见问题</h2>
                            </div>
                        </scroller>
                    </div>
                </article>
            </article>
        </scroller>
        <article class="project-bottom">
            <div class="Invest-btn-area">
                <img src="../../../static/images/invest/ljtz.png">
                <span>立即投资</span>
            </div>
        </article>
    </div>
</template>
<script type="text/ecmascript-6">
    import {HttpClient} from './../../utils/http-client'
    import myHeader from './../../components/header/MyHeader.vue'
    import {Countup, Tab, TabItem, Swiper, SwiperItem, Scroller, XTable} from 'vux'
    export default{
        name: 'Fortune',
        ready () {
            setTimeout(() => {
                this.show = true
            }, 10)
        },
        data () {
            return {
                tabIndex: 1,
                productInfo:{
                    yearProfitRate:15.00,               //预计年化收益率
                    yearIncreaseRate:0.5,       //预计年化增长率
                    projectTerm:3,                    //项目期限
                    canInvestAmount:10000.00,           //可投金额
                    openBidTime:'2015-11-06 12:00',     //开标时间
                    projectNumber:'HTYUETY-13777',      //项目编号
                    financeAmount:10000000.00,          //融资总额
                    repayWay:'按月计息，到期还本还息'       //还款方式
                },
                productDetail:{
                    hzjg:'借款企业是一家集客房、餐饮、会议、康娱等为一体的综合性涉外酒店，企业成立于04年。',
                    dywxx:'******************************',
                    czlc:'******************************',
                    bxbz:'******************************',
                }

            }
        },
        components: {myHeader, Countup, Tab, TabItem, Swiper, SwiperItem, Scroller, XTable},
        created () {
        },
        mounted () {
        },
        methods: {
            /**
             * 点击对详情页面进行tab切换
             * */
            changeDetailTab(index){
                this.tabIndex = index;
            }
        }
    }
</script>
<style scoped>
    @import '../../assets/css/invest/investDetail.css';
</style>


