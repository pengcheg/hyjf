<template>
  <div class="header-white">
    <x-header :left-options="{showBack: showBack}">{{title}}
      <a v-if="leftText" class="left-text" slot="left" @click="$emit('on-click-left')">{{leftText}}</a>
      <a v-if="rightText" class="right-text" slot="right" @click="$emit('on-click-right')">{{rightText}}</a>
    </x-header>
    <div class="vux-1px-b"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  import flexible from 'lib-flexible'
  export default{
    name: 'myHeaderWhite',
    props: {
      title: String,
      leftText: String,
      rightText: String,
      showBack: {
        type: Boolean,
        default: true
      },
    },
    components: {
      XHeader
    }
  }
</script>

<style>
  /*header背景色*/
  .header-white .vux-header {
    background-color: #fff !important;
    padding: 0;
    height: 1.066666rem;
    
  }

  /*header title颜色*/
  .header-white .vux-header .vux-header-title {
    color: #404040 !important;
    font-size: 0.434666rem;
    letter-spacing: .2rem;
    height: 1.066666rem;
  }
  .vux-header .vux-header-title, .vux-header h1 {
    font-size: 0.434666rem !important;
    font-weight: normal ;
    height: 1.066666rem;
    letter-spacing: .1rem !important;
  }

  /*header不显示 back*/
  .header-white .vux-header .vux-header-left a {
    display: none;
  }

  /*头部返回按钮颜色*/
  .header-white .vux-header .vux-header-left .left-arrow:before {
    border-color: #404040;
    width: .3rem;
    height: .3rem;
    border-width: .04rem 0 0 .04rem;
    content: "";
    position: absolute;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    top:0.133333rem;
    left: .2rem;
  }

  /*头部保存按钮*/
  .header-white .vux-header .vux-header-right {
    top: .8rem !important;
  }

  /*右侧文字*/
  .header-white .right-text {
    color: white !important;
    border: #333 1px solid;
    padding: .4rem .8rem;
    border-radius: .3rem;
    font-size: 1.2rem;
  }

  /*左侧文字*/
  .header-white .left-text {
    color: #333 !important;
    display: block !important;
  }
</style>