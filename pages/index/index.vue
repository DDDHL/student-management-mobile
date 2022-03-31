<template>
	<view>
		主页
	</view>
</template>

<script>
	import { getMenu } from '../../config/api.js';
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.test()
		},
		methods: {
			async test(){
				getMenu({ custom: { auth: false }}).then((res) => {
					console.log(res)
				}).catch((err) =>{
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
