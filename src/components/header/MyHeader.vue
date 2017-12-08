<template>
  <div class="header">
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
    name: 'myHeader',
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
  .vux-tab {
    height: 1.2rem !important;
  }
  .vux-tab .vux-tab-item {
    font-size: .4rem !important;
    text-align: center;
    line-height: 1.2rem !important;
    color: #404040;
  }
  .header .vux-header {
    background-color: #fb7d23 !important;
    height: 1.2rem;
  }

  /*header title颜色*/
  .header .vux-header .vux-header-title {
    color: white !important;
    font-size: .42rem !important;
    letter-spacing: .2rem !important;
    height: 1.2rem;
    line-height: 1.2rem;
  }
  .vux-header .vux-header-title, .vux-header h1 {
    font-size: .48rem !important;
    font-weight: 200 !important;
    letter-spacing: .1rem !important;
  }

  /*header不显示 back*/
  .header .vux-header .vux-header-left a {
    display: none;
  }

  /*头部返回按钮颜色*/
  .header .vux-header .vux-header-left .left-arrow:before {
    border-color: white;
    width: .3rem;
    height: .3rem;
    border-width: .06rem 0 0 .06rem;
    content: "";
    position: absolute;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    top: .33rem;
    left: .2rem;
  }

  /*头部保存按钮*/
  .header .vux-header .vux-header-right {
    top: .8rem !important;
  }

  /*右侧文字*/
  .header .right-text {
    color: white !important;
    border: #333 1px solid;
    padding: .4rem .8rem;
    border-radius: .3rem;
    font-size: 1.2rem;
  }

  /*左侧文字*/
  .header .left-text {
    color: #333 !important;
    display: block !important;
  }
</style>
