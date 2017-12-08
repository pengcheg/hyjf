<template>
    <div id="find" class=" overflow-hidden">
        <myHeaderWhite title="发现"></myHeaderWhite>
        <Banner :aspectRatio="aspectRatio" :imgList="imgList"></Banner>
        <div class="bar">
        	<div class="link-box">
        		<router-link class='link' to=""><img src="static/images/find/bar-1.png" alt="" /></router-link>
        		<p>关于我们</p>
        	</div>
        	<div class="link-box">
        		<router-link class='link' to=""><img src="static/images/find/bar-2.png" alt="" /></router-link>
        		<p>新手指引</p>
        	</div>
        	<div class="link-box">
        		<router-link class='link' to="" ><img src="static/images/find/bar-3.png" alt="" /></router-link>
        		<p>安全保障</p>
        	</div>
        	<div class="link-box">
        		<router-link class='link' to=""><img src="static/images/find/bar-4.png" alt="" /></router-link>
        		<p>邀请好友</p>
        	</div>
        </div>
        <div class="commpany-dynamic">{{pageData.commpanyDynamic}}</div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {HttpClient} from './../../utils/http-client'
    import myHeaderWhite from './../../components/header/MyHeaderWhite.vue'
    import Banner from './../../components/Index/Banner.vue'
    export default{
        name: 'Find',
        ready () {
            setTimeout(() => {
                this.show = true
            }, 10)
        },
        data () {
            return {
            	aspectRatio:500/1242,
            	imgList : [
		          {img:'static/images/index/banner1.png',url:"https://www.hyjf.com"},
		          {img:'http://placeholder.qiniudn.com/1242x500/FFEF7D/ffffff',url:"javascript:"},
		          {img:'http://placeholder.qiniudn.com/1242x500/8AEEB1/ffffff',url:"javascript:"}
		        ],
		        pageData: {},
            }
        },
        components: {myHeaderWhite,Banner},
        created () {
        	var that=this
			var res = HttpClient.get('/findData')
			res.then(function(res){
				console.log(res)
			  	that.pageData=res.data
			})
        },
        mounted () {
        },
        methods: {}
    }
</script>
<style  lang="less">
#find{
	color: #404040;
	.bar{
		padding-top: 0.32rem;
		padding-bottom: 0.24rem;
		background:#fff;
		display:flex;
		p{
			margin-top: 0.133333rem;
			line-height: 0.48rem;
		}
		.link-box{
			flex: 1;
			float: left;
			text-align: center;
			img{
				width: 1.226666rem;
				width: 1.226666rem;
			}
		}
	}
}

</style>
<style scoped>
</style>


