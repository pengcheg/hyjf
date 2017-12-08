<template>
	<swiper class="main-banner" :list="imgList" auto style="width:100%;" :show-desc-mask="false" :aspect-ratio="aspectRatio" dots-class="custom-bottom" dots-position="center" ></swiper>
</template>
<script type="text/ecmascript-6">
  import { Swiper,SwiperItem} from 'vux'
  export default{
    name: 'Banner',
    data () {
    	return {}
    },
    components: {
      Swiper,
      SwiperItem
    },
    props:{
    	aspectRatio: Number,
    	imgList: Array
    }
  }
</script>
<style>
	.main-banner.vux-slider>.vux-indicator>a>.vux-icon-dot,
	.main-banner.vux-slider .vux-indicator-right>a>.vux-icon-dot {
	    background-color: rgba(245, 224, 224,.8);
	    box-shadow: 0px 0.04025765rem 0.10466989rem 0px rgba(158, 52, 0, 0.3);
	    border-radius: 0.12882448rem/* 16px */;
	    width: 0.12882448rem;/* 16px */
	    height: 0.12882448rem;/* 16px */
	    transition: width 0.3s;
		-webkit-transition: width 0.3s; /* Safari 和 Chrome */
	}

	.main-banner.vux-slider>.vux-indicator>a>.vux-icon-dot.active,
	.main-banner.vux-slider .vux-indicator-right>a>.vux-icon-dot.active {
	    background-color: #ffffff;
	    width:0.32206119rem;/* 40px */
	}
</style>