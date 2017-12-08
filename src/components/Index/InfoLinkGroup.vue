<template>
    <flexbox  class="index-info-links">
      <flexbox-item v-for="item in links"><a :href="item.url"><img :src="item.img" width="100%" alt=""></a></flexbox-item>
    </flexbox>
</template>
<script type="text/ecmascript-6">
  import { Flexbox, FlexboxItem } from 'vux'
  export default{
    name: 'InfoLinkGroup',
    data () {
      return {}
    },
    components: {
      Flexbox,
      FlexboxItem
    },
    props:{
      links:Array
    }
  }
</script>
<style lang="less">

</style>