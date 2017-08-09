<template>
	<div>
		<div>index</div>
		<button @click="getParam">得到路由参数</button>
	</div>
</template>
<script>
	export default {
		methods: {
			getParam (){
				console.log(this.$route.params);
			}
		}
	}
</script>