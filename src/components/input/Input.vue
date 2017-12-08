<template>
    <div class="product-list section-group">
        <div class="title">{{titleID}}<span class="isVip">尊享</span></div>
        <flexbox class="items">
            <flexbox-item v-for="item in list" class="item">
                <div v-if="item.type != 3" class="value" v-bind:class="item.type == 1 ? 'highlight' : ''">
                    {{item.value}}
                    <span v-if="item.unit != ''" class="unit">
                        {{item.unit}}</span></div>
                <div v-if="item.type == 3" class="btn"><x-button type="product-list" action-type="button">{{item.name}}</x-button></div>
                <div class="key" v-if="item.type != 3 ">{{item.name}}</div>
                <div class="key ta-c" v-else>{{item.value}}</div>
            </flexbox-item>
        </flexbox>
    </div>
</template>
<script type="text/ecmascript-6">
    import { XButton,Flexbox, FlexboxItem } from 'vux'
    export default{
        name: 'InvestListItem',
        ready () {
        },
        data () {
            return {

            }
        },
        components: {
            XButton,
            Flexbox,
            FlexboxItem
        },
        props:{
            status: String,
            titleType:String,
            titleID:String,
            list: Array
        },
        created () {
        },
        mounted () {
        },
        computed: {

        },
        methods: {
        }
    }
</script>
<style lang="less">

    .product-list {
        padding: 0.32206119rem/* 40px */;
        font-size:0.32206119rem/* 40px */;
        color:#999999;
    .vux-flexbox .vux-flexbox-item{
        margin:0!important;
    }
    .title{
        font-size: 0.37816425rem/* 40px */;
        color:#404040;
    span.isVip{
        font-size: 0.32206119rem/* 40px */;
        margin-left: 0.12077295rem/* 15px */;
        color:#999999;
        border: 1px solid #999999;
        padding: .02rem  .24rem;
        border-radius: .3rem;
    }
    }
    .item{
    & .value,
    & .btn{
          height: 1.12721417rem/* 140px */;
      }
    .value{
        font-size: 0.77294686rem/* 96px */;
        color:#404040;
    .unit{
        font-size: 0.32206119rem/* 40px */;
        margin-left: 0.0805153rem/* 10px */;
    }
    }
    .btn{
        box-sizing: border-box;
        padding-top: 0.32206119rem/* 40px */;
    .weui-btn{
        font-size: 0.33816425rem/* 42px */;
        height: 0.72463768rem/* 90px */;
        line-height: 0.72463768rem/* 90px */;
        white-space: nowrap;
    &.weui-btn_product-list{
         padding-left: 0.11272142rem/* 14px */;
         padding-right: 0.11272142rem/* 14px */;
         background: #fc6524;
         border-radius: 0.12882448rem/* 16px */;
    &:after{
         border:0;
     }
    }
    }
    }
    .key{
        font-size: 0.31400966rem/* 39px */;
        height: 0.64412238rem/* 80px */;
        line-height: 0.64412238rem/* 80px */;
    }
    }
    }


</style>