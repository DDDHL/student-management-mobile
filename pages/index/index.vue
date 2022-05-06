<template>
	<view>
		<view class="title" :style="'padding-top:' + titleHeight + 'px'">新华的湖</view>
		<view class="swiper"><u-swiper :list="list3" previousMargin="30" nextMargin="30" circular autoplay interval="3000" radius="5"></u-swiper></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			titleHeight: 50,
			list3: ['https://cdn.uviewui.com/uview/swiper/swiper3.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper1.png']
		};
	},
	onLoad() {
		// #ifdef MP-WEIXIN
		this.getHeight();
		// #endif
	},
	methods: {
		// 获取微信右上角胶囊高度
		getHeight() {
			let res = wx.getMenuButtonBoundingClientRect();
			this.titleHeight = res.top;
		}
	}
};
</script>

<style lang="scss" scoped>
.title {
	font-weight: 600;
	line-height: 30px;
	margin-left: 40rpx;
	font-size: 17px;
}
.swiper {
	margin-top: 40rpx;
}
</style>
