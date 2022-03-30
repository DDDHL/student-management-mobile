<template>
	<view class="bg">
		<view class="title" :style="'padding-top:' + titleHeight + 'px'">
			我的
		</view>
		<view class="cu-avatar lg round margin-left margin-top" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleHeight:50
			}
		},
		onLoad() {
			// #ifdef MP-WEIXIN
			this.getHeight()
			// #endif
		},
		methods: {
			// 获取微信右上角胶囊高度
			getHeight(){
				let res=wx.getMenuButtonBoundingClientRect()
				this.titleHeight = res.height/4 + res.top
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg{
		width: 100%;
		height: 600rpx;
		background-color: #D9AFD9;
		background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
		border-radius: 100% 100% 100% 100% / 0% 0% 18% 18%;
	}
	.title{
		font-weight: 700;
		line-height: 16px;
		margin-left: 40rpx;
	}
	
</style>
