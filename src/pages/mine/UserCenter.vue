<template>
    <div class="index overflow-hidden">
        <myHeaderWhite title="个人中心"></myHeaderWhite>
        <scroller>
            <article class="container" style="margin-top: .2rem">
                <group class="mine-group" link="/investDetail">
                    <cell is-link>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">头像</span>
                            <img :src="userImg" class="cell-head-img">
                        </span>
                    </cell>
                    <cell>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">用户名</span>
                            <input  type="text" :value="userName" class="cell-price cell-margin-none cell-input" maxlength="10"/>
                        </span>
                    </cell>
                    <cell>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">我的二维码</span>
                            <img :src="myErweimaImg" class="cell-img">
                        </span>
                    </cell>
                </group>
                <group class="mine-group" link="/investDetail">
                    <cell>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">汇付账户</span>
                            <input  type="text" :value="payToAccount" class="cell-price cell-margin-none cell-input" maxlength="11"/>
                        </span>
                    </cell>
                    <cell>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">银行存管账户</span>
                            <input  type="text" :value="bankDepositAccount" class="cell-price cell-margin-none cell-input" maxlength="30"/>
                        </span>
                    </cell>
                </group>
                <group class="mine-group" link="/investDetail">
                    <cell>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">真实姓名</span>
                            <input  type="text" :value="realName" class="cell-price cell-margin-none cell-input" maxlength="11"/>
                        </span>
                    </cell>
                    <cell>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">身份证号</span>
                            <input  type="text" :value="idNumber" class="cell-price cell-margin-none cell-input" maxlength="11"/>
                        </span>
                    </cell>
                    <cell is-link>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">绑定手机</span>
                            <span class="cell-price">{{phoneNum}}</span>
                        </span>
                    </cell>
                    <cell is-link>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">绑定邮箱</span>
                            <span class="cell-price">{{mail}}</span>
                        </span>
                    </cell>
                    <cell is-link>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">紧急联系人</span>
                            <span class="cell-price">设置</span>
                        </span>
                    </cell>
                </group>
                <group class="mine-group" link="/investDetail">
                    <cell>
                        <span slot="title" class="cell-span">
                            <span class="cell-title">风险评估</span>
                            <span class="cell-price cell-margin-none">{{riskType}}</span>
                        </span>
                    </cell>
                </group>
            </article>
        </scroller>
    </div>
</template>
<script type="text/ecmascript-6">
    import {HttpClient} from './../../utils/http-client'
    import myHeaderWhite from './../../components/header/MyHeaderWhite.vue'
    import {Cell, Group,XInput} from 'vux'
    export default{
        name: 'UserCenter',
        ready () {
            setTimeout(() => {
                this.show = true
            }, 10)
        },
        data () {
            return {
                userImg:'../../../static/images/mine/user-head-img.jpg',
                userName:'郑先生',
                myErweimaImg:'../../../static/images/mine/erweima.png',
                payToAccount:'152**9799',
                bankDepositAccount:'2890873431***135',
                realName:"郑凯",
                idNumber:'370********9799',
                phoneNum:'152**9799',
                mail:"499**94@qq.com",
                riskType:'进取型',
            }
        },
        components: {myHeaderWhite,Cell, Group,XInput},
        created () {
        },
        mounted () {
        },
        methods: {}
    }
</script>
<style scoped>
    @import '../../assets/css/mine/mine.css';
</style>


