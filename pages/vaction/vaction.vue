<template>
	<view class="bg">
		<!-- 背景 -->
		<image src="../../static/vaction_bg.png" mode="aspectFill"></image>
		<image src="../../static/moyu.gif" mode="aspectFill" :style="'top:' + textTop + 'px;left:' + textLeft * 12 + 'rpx'"></image>
		<view class="bg_text" :style="'top:' + textTop + 'px;left:' + textLeft + 'px'">上课这么累，我想摸鱼</view>
		<!-- 日历 -->
		<view class="contain">
			<view>
				<u-cell-group :border="false">
					<view style="height: 28rpx;"></view>
					<u-cell title="请选择天数" isLink="true" :value="dayType" @click="showDayType = !showDayType"></u-cell>
					<u-cell title="请选择日期" isLink="true" :value="date" @click="DateShow = !DateShow"></u-cell>
					<u-cell title="发送微信通知" clickable><u-switch slot="right-icon" v-model="checked" size="20" activeColor="#5ac725"></u-switch></u-cell>
					<view class="input"><u--textarea v-model="reason" placeholder="请输入请假原因" count maxlength="20"></u--textarea></view>
					<view style="width: 60%;margin: 20rpx 0 40rpx 20%;"><u-button text="提交" color="#0ab99c" shape="circle" @click="submit"></u-button></view>
				</u-cell-group>
				<u-calendar :showTitle="false" :show="DateShow" :mode="DateMode" @confirm="confirmDate" @close="DateShow = !DateShow"></u-calendar>
				<u-picker :show="showDayType" :columns="columns" @confirm="DayTypeConfirm" :defaultIndex="defaultIndex" @cancel="showDayType = !showDayType"></u-picker>
			</view>
		</view>
		<view class="bottom">
			<u-divider text="END"></u-divider>
			<u-cell-group :border="false">
				<u-cell title="查看假单申请" isLink="true" @click="goPage('vactionList', true)"></u-cell>
				<u-cell title="查看学校公告" isLink="true" @click="goPage('index')"></u-cell>
				<u-cell title="查看个人信息" isLink="true" @click="goPage('user')"></u-cell>
			</u-cell-group>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
import { testToken } from '@/utils/token.js';
import { vacation } from '@/config/api.js';
import { wechatDingYue } from '@/utils/getWeChatPermit.js';
export default {
	data() {
		return {
			textTop: 50,
			textLeft: 20,
			date: '',
			reason: '',
			checked: true,
			DateShow: false,
			showDayType: false,
			dayType: '连续日期',
			columns: [['连续日期', '单日']],
			defaultIndex: 0,
			DateMode: 'range'
		};
	},
	watch: {
		dayType(newValue) {
			if (newValue == '连续日期') {
				this.DateMode = 'range';
			}
			if (newValue == '单日') {
				this.DateMode = 'single';
			}
			this.date = '';
		}
	},
	onTabItemTap() {
		if (this.$store.state.hasLogin) {
			wechatDingYue().then(res => {
				console.log(res);
			});
		}
	},
	onLoad() {
		// #ifdef MP-WEIXIN
		this.getHeight();
		// #endif
	},
	onShow() {
		this.checkToken();
	},
	methods: {
		// 验证token
		checkToken() {
			testToken()
				.then(res => {
					this.$store.state.hasLogin = true;
				})
				.catch(() => {
					this.$store.dispatch('logout');
				});
		},
		getHeight() {
			let res = wx.getMenuButtonBoundingClientRect();
			this.textTop = res.top;
		},
		// 日期
		// 确定选择日期
		confirmDate(e) {
			this.DateShow = false;
			if (e.length == 1) {
				this.date = e[0];
			} else {
				this.date = e[0] + ' ~ ' + e[e.length - 1];
			}
		},
		// 确定选择日期类型
		DayTypeConfirm(e) {
			this.showDayType = false;
			this.dayType = e.value[0];
		},
		// 提交
		submit() {
			if (!this.$store.state.hasLogin) {
				this.$refs.uToast.show({
					type: 'error',
					message: '请先登录'
				});
				return;
			}
			if (!this.date) {
				this.$refs.uToast.show({
					type: 'error',
					message: '请选择请假日期'
				});
				return;
			}
			if (!this.reason) {
				this.$refs.uToast.show({
					type: 'error',
					message: '请填写请假原因'
				});
				return;
			}
			uni.showLoading({
				title: '正在提交'
			});
			// 验证成功发送请假请求
			// 数据处理
			let leaveStartTime, leaveEndTime;
			let user = uni.getStorageSync('user');
			// 判断单日还是多日
			if (this.date.includes('~')) {
				leaveStartTime = this.date.split('~')[0].trim();
				leaveEndTime = this.date.split('~')[1].trim();
			} else {
				leaveStartTime = leaveEndTime = this.date;
			}
			let data = {
				userAccount: user.account,
				major: user.major,
				grade: user.grade,
				nickName: user.nickName,
				leaveStartTime: leaveStartTime,
				leaveEndTime: leaveEndTime,
				leaveReason: this.reason
			};
			vacation(data, {
				custom: {
					auth: true
				}
			}).then(res => {
				uni.hideLoading();
				this.reason = '';
				this.date = '';
			});
		},
		// 下方跳转
		goPage(path, isTab) {
			if (!this.$store.state.hasLogin) {
				this.$refs.uToast.show({
					type: 'error',
					message: '请先登录'
				});
				return;
			}
			if (isTab) {
				uni.navigateTo({
					url: `../vactionList/vactionList`
				});
				return;
			}
			uni.switchTab({
				url: `../${path}/${path}`
			});
		}
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
	position: relative;
	top: -100rpx;
	left: 3%;
	border-radius: 30rpx;
	.input {
		margin: 20rpx 2%;
	}
}
.bottom {
	width: 100%;
	position: absolute;
}
</style>
