<template>
  <div class="index overflow-hidden">
    <Information :hasMsg="true"></Information>
    <Banner :aspectRatio="aspectRatio" :imgList="imgList"></Banner>
    <div class="section-group">
      <a href="javascript:" class="index-regist-banner">
        <img src="static/images/index/index_hongbao.jpg" width="100%" alt="">
      </a>
      <a href="javascript:" class="btn-index-regist">立即注册</a>
    </div>
    <InfoLinkGroup class="section-group" :links="InfoLink1"></InfoLinkGroup>
    <ProductListItem v-for="listOne in Productlist" :status="listOne.status" :titleType="listOne.titleType" :titleID="listOne.titleID" :link="listOne.link" :list="listOne.listItem" @linkToDetail="toDetail"></ProductListItem>
    <div class="section-group total-invest">
      <div class="title">累计投资金额</div>
      <div class="number"><span class="unit">¥</span><Countup :start-val="1" :end-val="15801501411" :duration="2"></Countup></div>
      <InfoLinkGroup :links="InfoLink2"></InfoLinkGroup>
    </div>

    <div class="warning-tips">市场有风险，投资需谨慎</div>
  </div>
</template>
<script>
  import {HttpClient} from './../../utils/http-client'
  import Information from './../../components/Information.vue'
  import Banner from './../../components/Index/Banner.vue'
  import ProductListItem from './../../components/Index/ProductListItem.vue'
  import InfoLinkGroup from './../../components/Index/InfoLinkGroup.vue'
  import {Flexbox,FlexboxItem,Swiper,SwiperItem,Countup} from 'vux'
  import banner1 from './../../assets/images/index/banner1.png'
  export default{
    name: 'index',
    ready () {
      setTimeout(() => {
        this.show = true
      }, 10)
    },
    data () {
      return {
        startCount: false,
        aspectRatio:500/1242,
        imgList : [
          {img:banner1,url:"https://www.hyjf.com"},
          {img:'http://placeholder.qiniudn.com/1242x500/FFEF7D/ffffff',url:"javascript:"},
          {img:'http://placeholder.qiniudn.com/1242x500/8AEEB1/ffffff',url:"javascript:"}
        ],
        InfoLink1:[
          {img:"static/images/index/index_zjcg.png",url:"javascript:"},
          {img:"static/images/index/index_mgss.png",url:"javascript:"}
        ],
        InfoLink2:[
          {img:"static/images/index/index_ptbg.png",url:"javascript:"},
          {img:"static/images/index/index_gsjs.png",url:"javascript:"}
        ],
        Productlist:[
          {
            status:"1",
            titleType:"新手",
            titleID:"NEW1708085",
            link:"mine",
            listItem: [{
              status:"1",
              type:"1",
              name: "年化利率",
              value:"12.00",
              unit:"%"
            },
            {
              
              type:"2",
              name: "项目期限",
              value:"30",
              unit:"天"
            },
            {
              type:"3",
              name: "马上投资",
              value:"剩余1,000,000",
              unit:""
            }]
          },
          {
            status:"1",
            titleType:"散标",
            titleID:"HBD1708085",
            link:"/InvestDetail",
            listItem: [{
              type:"1",
              name: "年化利率",
              value:"24",
              unit:"%"
            },
            {
              type:"2",
              name: "项目期限",
              value:"24",
              unit:"个月"
            },
            {
              type:"3",
              name: "马上投资",
              value:"剩余1,000,000",
              unit:""
            }]
          },
          {
            status:"1",
            titleType:"计划",
            titleID:"天天盈/D-30",
            link:"/Invest",
            listItem: [{
              type:"1",
              name: "预期年化利率",
              value:"8.50",
              unit:"%"
            },
            {
              type:"2",
              name: "锁定期限",
              value:"30",
              unit:"天"
            },
            {
              type:"3",
              name: "马上投资",
              value:"开放1,000,000",
              unit:""
            }]
          }
        ]
      }
    },
    components: {
      Flexbox, 
      FlexboxItem,
      Swiper,
      SwiperItem,
      Information,
      Banner,
      ProductListItem,
      InfoLinkGroup,
      Countup
    },
    created () {
    },
    mounted () {
    },
    methods: {
      toDetail(link){
        this.$router.push(link);
      }
    },
    computed:{

    }
  }
</script>
<style  lang="less">
    @import '../../assets/css/index/index.less';
</style>


