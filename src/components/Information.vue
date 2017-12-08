<template>
	<div class="msg-area">
	    <img src="/static/images/mine/msg-icon.png">
	    <div v-if="hasMsg" class="msg-have"></div>
	</div>
</template>
<script>
	export default {
        name: 'Information',
        data () {
            return {
            	
            }
        },
        props:{
        	hasMsg : true
        }
    }
</script>