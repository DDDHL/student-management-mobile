<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="">
			wechat
		</view>
		<!-- #endif -->

		<!-- #ifdef APP-PLUS -->
		<view class="">
			APP
		</view>
		<!-- #endif -->
		
		<u-loading-page :loading="isloading" loading-text="加载中..." color="#000" fontSize="16"></u-loading-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isloading:false,
			}
		},
		onLoad(){
	
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
