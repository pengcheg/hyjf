<template>
    <div class="index overflow-hidden">
        <article class="container">
            <tab :line-width="1" custom-bar-width="1rem" active-color='#fc6524' bar-active-color="#fc6524">
                <tab-item selected @on-item-click="changeInvestIndex(1)">债权</tab-item>
                <tab-item @on-item-click="changeInvestIndex(2)">计划</tab-item>
                <tab-item @on-item-click="changeInvestIndex(3)">债转</tab-item>
            </tab>
            <div class="tab-swiper vux-center"  v-if="investIndex==1">
                <scroller  scrollbar-y use-pullup :pullup-config="loadConfig" ref="loadRef"
                          @on-pullup-loading="loadMore">
                    <InvestListItem v-for="listOne in Productlist" :status="listOne.status"
                                    :titleType="listOne.titleType" :titleID="listOne.titleID"
                                    :list="listOne.listItem" @toDetail="toDetail"></InvestListItem>
                </scroller>
            </div>
            <div class="tab-swiper vux-center"  v-if="investIndex==2">
                <scroller lock-x>
                    <InvestListItem v-for="listOne in Productlist2" :status="listOne.status"
                                    :titleType="listOne.titleType" :titleID="listOne.titleID"
                                    :list="listOne.listItem" @toDetail="toDetail"></InvestListItem>
                </scroller>
            </div>
            <div class="tab-swiper vux-center"  v-if="investIndex==3">
                <scroller lock-x>
                    <InvestListItem v-for="listOne in Productlist3" :status="listOne.status"
                                    :titleType="listOne.titleType" :titleID="listOne.titleID"
                                    :list="listOne.listItem" @toDetail="toDetail"></InvestListItem>
                </scroller>
            </div>
        </article>
    </div>
</template>
<script type="text/ecmascript-6">
    import {HttpClient} from './../../utils/http-client'
    import InvestListItem from './../../components/invest/InvestListItem.vue'
    import {Tab, TabItem, Swiper, SwiperItem, Scroller} from 'vux'
    import {mapGetters} from 'vuex'
    export default{
        name: 'InvestList',
        ready () {
            setTimeout(() => {
                this.show = true
            }, 10)
        },
        data () {
            return {
                Productlist: [
                    {
                        status: "1",
                        titleType: "新手",
                        titleID: "NEW1708085",
                        listItem: [
                            {
                                status: "1",
                                type: "1",
                                name: "年化利率",
                                value: "12.00",
                                unit: "%"
                            },
                            {

                                type: "2",
                                name: "项目期限",
                                value: "30",
                                unit: "天"
                            },

                            {
                                type: "3",
                                name: "马上投资",
                                value: "剩余1,000,000",
                                unit: ""
                            },

                        ]
                    },
                    {
                        status: "1",
                        titleType: "散标",
                        titleID: "HBD1708085",
                        listItem: [{
                            type: "1",
                            name: "年化利率",
                            value: "24",
                            unit: "%"
                        },
                            {
                                type: "2",
                                name: "项目期限",
                                value: "24",
                                unit: "个月"
                            },
                            {
                                type: "3",
                                name: "马上投资",
                                value: "剩余1,000,000",
                                unit: ""
                            }]
                    },
                    {
                        status: "1",
                        titleType: "计划",
                        titleID: "天天盈/D-30",
                        listItem: [{
                            type: "1",
                            name: "预期年化利率",
                            value: "8.50",
                            unit: "%"
                        },
                            {
                                type: "2",
                                name: "锁定期限",
                                value: "30",
                                unit: "天"
                            },
                            {
                                type: "3",
                                name: "马上投资",
                                value: "开放1,000,000",
                                unit: ""
                            }]
                    }
                ],
                Productlist2: [
                    {
                        status: "1",
                        titleType: "新手",
                        titleID: "NEW1708085",
                        listItem: [
                            {
                                status: "1",
                                type: "1",
                                name: "预期年化利率",
                                value: "12.00",
                                unit: "%"
                            },
                            {

                                type: "2",
                                name: "锁定期限",
                                value: "7",
                                unit: "天"
                            },

                            {
                                type: "3",
                                name: "马上投资",
                                value: "剩余1,000,000",
                                unit: ""
                            },

                        ]
                    },
                    {
                        status: "1",
                        titleType: "散标",
                        titleID: "HBD1708085",
                        listItem: [
                            {
                            type: "1",
                            name: "预期年化利率",
                            value: "24",
                            unit: "%"
                        },
                            {
                                type: "2",
                                name: "锁定期限",
                                value: "8",
                                unit: "天"
                            },
                            {
                                type: "3",
                                name: "马上投资",
                                value: "剩余1,000,000",
                                unit: ""
                            }]
                    },
                    {
                        status: "1",
                        titleType: "计划",
                        titleID: "天天盈/D-30",
                        listItem: [
                            {
                            type: "1",
                            name: "预期年化利率",
                            value: "8.50",
                            unit: "%"
                        },
                            {
                                type: "2",
                                name: "锁定期限",
                                value: "30",
                                unit: "天"
                            },
                            {
                                type: "3",
                                name: "马上投资",
                                value: "开放1,000,000",
                                unit: ""
                            }]
                    }
                ],
                Productlist3: [
                    {
                        status: "1",
                        titleType: "新手",
                        titleID: "NEW1708085",
                        listItem: [
                            {
                                status: "1",
                                type: "1",
                                name: "年化利率",
                                value: "12.00",
                                unit: "%"
                            },
                            {

                                type: "1",
                                name: "折让率",
                                value: "0.5",
                                unit: "%"
                            },
                            {

                                type: "2",
                                name: "项目期限",
                                value: "30",
                                unit: "天"
                            },

                            {
                                type: "3",
                                name: "马上投资",
                                value: "剩余1,000,000",
                                unit: ""
                            },

                        ]
                    },
                    {
                        status: "1",
                        titleType: "散标",
                        titleID: "HBD1708085",
                        listItem: [
                            {
                                type: "1",
                                name: "年化利率",
                                value: "24",
                                unit: "%"
                            },
                            {

                                type: "1",
                                name: "折让率",
                                value: "0.5",
                                unit: "%"
                            },
                            {
                                type: "2",
                                name: "项目期限",
                                value: "24",
                                unit: "个月"
                            },
                            {
                                type: "3",
                                name: "马上投资",
                                value: "剩余1,000,000",
                                unit: ""
                            }]
                    },
                    {
                        status: "1",
                        titleType: "计划",
                        titleID: "天天盈/D-30",
                        listItem: [
                            {
                                type: "1",
                                name: "预期年化利率",
                                value: "8.50",
                                unit: "%"
                            },
                            {

                                type: "1",
                                name: "折让率",
                                value: "0.5",
                                unit: "%"
                            },
                            {
                                type: "2",
                                name: "锁定期限",
                                value: "30",
                                unit: "天"
                            },
                            {
                                type: "3",
                                name: "马上投资",
                                value: "开放1,000,000",
                                unit: ""
                            }]
                    }
                ],
                investIndex:1
            }
        },
        components: {Tab, TabItem, Swiper, SwiperItem, Scroller, InvestListItem},
        created () {
        },
        mounted () {
            this.getListsData();
        },
        computed: {
            ...mapGetters({
                shopTabList: 'shopTabList',
                shopTabValue: 'shopTabValue'
            })
        },
        methods: {
            /**
             * 点击跳转到投资详情页面
             * */
            toDetail: function () {
                this.$router.push('/investDetail');
            },

            /**
             * 点击tab切换，1：债权；2：计划；3：债转
             * */
            changeInvestIndex(index){
                this.investIndex=index;
            },

            /* 加载更多*/
            loadMore () {
                alert("loadMore");
                alert(this.Productlist.length)
                setTimeout(() => {
                    this.getListsData();
                    setTimeout(() => {
                        this.$refs.loadRef.donePullup()
                    }, 100)
                    if (this.Productlist.length === 30) {
                        setTimeout(() => {
                            this.$refs.loadRef.disablePullup()
                        }, 100)
                    }
                }, 2000)
            },

            /* 获取列表数据*/
            getListsData() {
//                for (var i = 0; i <= 3; i++) {
                    var item = {
                        status: "1",
                        titleType: "新手",
                        titleID: "NEW1708085",
                        listItem: [
                            {
                                status: "1",
                                type: "1",
                                name: "年化利率",
                                value: "12.00",
                                unit: "%"
                            },
                            {

                                type: "2",
                                name: "项目期限",
                                value: "30",
                                unit: "天"
                            },

                            {
                                type: "3",
                                name: "马上投资",
                                value: "剩余1,000,000",
                                unit: ""
                            },

                        ]
                    };
                    this.Productlist.push(item)
//                }
            },
        }
    }
</script>
<style lang="less">
    @import '../../assets/css/invest/investList.css';
</style>


