<template>
	<div class="field-tooltipWrap">
		<div class="field-tooltipInner">
			<div class="field-tooltip fieldTipBounceIn">
				<div class="zvalid-resultformat">
				    {{showMsg}}
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
    export default{
        name: 'showMsg',
        ready () {
        },
        data () {
            return {

            }
        },
        props:{
            showMsg: String
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
<style type="text/css">
.field-tooltipWrap{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 19891014;
}
.field-tooltipInner{
    pointer-events: none;
    display: table;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
}
.field-tooltip{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
@-webkit-keyframes fieldTipBounceIn{

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
 .zvalid-resultformat{
    display: inline-block;
    position: relative;
    background-color:rgba(0,0,0,0.8);
    color: #fff;
    padding: .32206119rem;
    font-size: .36231884rem;
    border-radius: .1610306rem;
    box-shadow: 0 0 .0805153rem rgba(0,0,0,.1);
    pointer-events: auto;
    animation-name:fieldTipBounceIn;
    -webkit-animation-name:fieldTipBounceIn;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: .18s;
    animation-duration: .18s;
}

</style>