<template>
	<view class="bg">
		<!-- 背景 -->
		<image src="../../static/vaction_bg.png" mode="aspectFill"></image>
		<image src="../../static/moyu.gif" mode="aspectFill" :style="'top:' + textTop + 'px;left:' + textLeft * 12 + 'rpx'"></image>
		<view class="bg_text" :style="'top:' + textTop + 'px;left:' + textLeft + 'px'">上课这么累，我想摸鱼</view>

		<!-- 日历 -->
		<view class="contain">
			<view class="container">
				<u-cell-group :border="false">
					<u-cell title="请选择日期" isLink="true" :value="date" @click="selectDate"></u-cell>
					<u-cell title="请选择日期" isLink="true" :value="date" @click="selectTime"></u-cell>
					<u-cell title="发送微信通知" clickable @click="wechatInfo"><u-switch slot="right-icon" v-model="checked" size="40rpx" activeColor="#5ac725"></u-switch></u-cell>
					<view class="input">
						<u--textarea v-model="reason" placeholder="请输入请假原因" count maxlength="60"></u--textarea>
					</view>
					<view style="width: 60%;margin: 20rpx 0 40rpx 20%;"><u-button text="提交" color="#0ab99c" shape="circle"></u-button></view>
				</u-cell-group>
			</view>
		</view>
		<view style="margin-top: 600rpx;">
			<u-divider text="END"></u-divider>
		</view>
		
		<view>
			<u-cell-group :border="false">
				<u-cell title="查看假单申请" isLink="true"  @click="selectDate"></u-cell>
				<u-cell title="查看学校公告" isLink="true"  @click="selectDate"></u-cell>
				<u-cell title="查看个人信息" isLink="true"  @click="selectDate"></u-cell>
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
			show: false,
			date: '2022/4/10',
			checked: true,
			reason:''
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
		},
		// 微信通知
		wechatInfo() {
			this.checked = !this.checked;
		},
		// 日期
		selectDate() {},
		selectTime() {}
	}
};
</script>

<style lang="scss" scoped>
.bg {
	> image {
		&:first-child {
			width: 100%;
			height: 450rpx;
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
.contain {
	box-shadow: 0 5rpx 10rpx #cccccc;
	width: 94%;
	background-color: #ffffff;
	position: absolute;
	top: 350rpx;
	left: 3%;
	border-radius: 30rpx;
	> view {
		margin-top: 25rpx;
	}
	.input {
		margin: 20rpx 2%;
	}
}
</style>
