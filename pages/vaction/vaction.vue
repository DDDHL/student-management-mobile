<template>
	<view class="bg">
		<!-- 背景 -->
		<image src="../../static/vaction_bg.png" mode="aspectFill"></image>
		<image src="../../static/moyu.gif" mode="aspectFill" :style="'top:' + textTop + 'px;left:' + textLeft * 6 + 'px'"></image>
		<view class="bg_text" :style="'top:' + textTop + 'px;left:' + textLeft + 'px'">上课这么累，我想摸鱼</view>

		<!-- 日历 -->
		<view class="contain">
			<view class="contain_title">
				请假单
			</view>
			<u-cell-group>
				<u-cell title="请选择日期" :isLink="true" arrow-direction="down"></u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			textTop: 50,
			textLeft: 20,
			show:false
		};
	},
	onLoad() {
		// #ifdef MP-WEIXIN
		this.getHeight();
		// #endif
	},
	methods: {
		getHeight() {
			let res = wx.getMenuButtonBoundingClientRect();
			this.textTop = res.top;
		}
	}
};
</script>

<style lang="scss" scoped>
.bg {
	background-color: $uni-color-bg;
	height: 100%;
	> image {
		&:first-child {
			width: 100%;
			border-radius: 0 0 60rpx 60rpx / 0 0 40rpx 40rpx;
		}
		&:nth-child(2) {
			width: 120rpx;
			height: 120rpx;
			position: absolute;
		}
	}
}
.bg_text {
	color: #ffffff;
	font-size: 38rpx;
	width: 32%;
	position: absolute;
}
.contain{
	width: 94%;
	height: 40%;
	background-color: #FFFFFF;
	position: absolute;
	top: 350rpx;
	left: 3%;
	border-radius: 40rpx;
}
.contain_title{
	text-align: center;
	font-size: 38rpx;
	margin: 10rpx;
}
</style>
