<template>
    <tabbar v-show="isShowBar" icon-class="vux-center" slot="bottom">
        <tabbar-item @on-item-click="routeLink('0')" selected>
            <img v-if="selected==0" slot="icon" src="/static/images/icon_index_active.png">
            <img v-if="selected!=0" slot="icon" src="/static/images/icon_index.png">
            <span :class="{ 'selected':selected==0 }" slot="label">首页</span>
        </tabbar-item>
        <tabbar-item @on-item-click="routeLink('1')">
            <img v-if="selected==1" slot="icon" src="/static/images/icon_invest_active.png">
            <img v-if="selected!=1" slot="icon" src="/static/images/icon_invest.png">
            <span :class="{ 'selected':selected==1 }" slot="label">投资</span>
        </tabbar-item>
        <tabbar-item @on-item-click="routeLink('2')">
            <img v-if="selected==2" slot="icon" src="/static/images/icon_find_active.png">
            <img v-if="selected!=2" slot="icon" src="/static/images/icon_find.png">
            <span :class="{ 'selected':selected==2 }" slot="label">发现</span>
        </tabbar-item>
        <tabbar-item @on-item-click="routeLink('3')">
            <img v-if="selected==3" slot="icon" src="/static/images/icon_mine_active.png">
            <img v-if="selected!=3" slot="icon" src="/static/images/icon_mine.png">
            <span :class="{ 'selected':selected==3 }" slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</template>

<script type="text/ecmascript-6">
    import {Tabbar, TabbarItem} from 'vux'
    export default {
        name: 'MainTabbar',
        data () {
            return {
                selected: localStorage.getItem('selected'),
                loadingText:"加载中",
                isLoading:false
            }
        },
        computed: {
            isShowBar () {
                var routeName = this.$route.name;
                if (routeName == 'Index' || routeName == 'Invest' || routeName == 'Find' || routeName == 'Mine') {
                    return true
                }
                return false
            }
        },
        components: {
            Tabbar,
            TabbarItem
        },
        methods: {
            routeLink: function (index) {
                switch (index) {
                    case '0'://首页
                        this.selected = 0;
                        this.$router.push({name: 'Index'});
                        break;
                    case '1'://财富汇
                        this.selected = 1;
                        this.$router.push({name: 'Invest'});
                        break;
                    case '2'://发现
                        this.selected = 2;
                        this.$router.push({name: 'Find'});
                        break;
                    case '3'://我的账户
                        this.selected = 3;
                        this.$router.push({name: 'Mine'});
                        break;
                }
            }
        }
    }
</script>