<template>
    <div id="app" class="bgGray">
        <view-box ref="viewBox" body-padding-bottom="1.19162641rem">
            <transition name="fade" mode="out-in" appear>
                <router-view></router-view>
            </transition>
        </view-box>
        <MainTabbar class="main-tabbar"></MainTabbar>
        <loading v-model="isLoading" :text="loadingText"></loading>
    </div>
</template>

<script>
    import flexible from 'lib-flexible'
    import {Loading,ViewBox} from 'vux'
    import MainTabbar from './components/MainTabbar.vue'
    //import {mapGetters} from 'vuex'
    export default {
        name: 'app',
        data () {
            return {
                isLoading:false,
                loadingText:"加载中"
            }
        },
        mounted(){
        },
        computed: {
        },
        components: {
            Loading,
            MainTabbar,
            ViewBox
        },
        methods: {
        }
    }
</script>

<style lang="less">
    @import './assets/css/loading.css';
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import './assets/css/app.less';
</style>
