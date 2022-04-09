<template>
	<view class="bgColor">
		<view class="bg">
			<view class="title" :style="'padding-top:' + titleHeight + 'px'">我的</view>
			<view class="cu-avatar lg round margin-left margin-top" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>

			<!-- 名字 -->
			<u-row customStyle="margin-bottom: 10px;color: #F1F1F1;">
				<u-col span="3">
					<view class="avatar"><u-avatar :src="avatar" shape="circle" size="55" mode="aspectFill"></u-avatar></view>
				</u-col>
				<u-col span="6">
					<view style="font-weight: 700;" v-if="account">{{ nickName }}</view>
					<view style="font-weight: 700;" v-else @click="login()">登录</view>
				</u-col>
				<u-col span="4">
					<view v-if="account" style="display: flex;" @click="editInfo">
						<u-icon name="edit-pen" color="#F1F1F1" size="16"></u-icon>
						<view style="font-size: 14px;">编辑信息</view>
					</view>
				</u-col>
			</u-row>

			<!-- 个人信息 -->
			<view class="info" v-if="account">
				<view>
					<view>{{grade}}</view>
					<view style="font-size: 12px;">年级</view>
				</view>
				<view>
					<view>{{account}}</view>
					<view style="font-size: 12px;">账号</view>
				</view>
				<view>
					<view>学生</view>
					<view style="font-size: 12px;">职位</view>
				</view>
			</view>
			<!-- list -->
			<view class="contain">
				<view class="contain_bg">
					<view v-for="item in options" :key="item.name">
						<view>{{item.name}}</view>
						<view>></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			titleHeight: 50,
			isLogin: false,
			avatar: '',
			nickName: 'Leander',
			account: 'XXXXXXX',
			grade: '777',
			role: '管理员',
			options: [
				{ name: '新华的圈' },
				{ name: '我的信息' },
				{ name: '操作记录' },
				{ name: '休假申请' },
				{ name: '申请记录' },
				{ name: '联系我们' },
				{ name: '信息反馈' },
				{ name: '系统介绍' }
			]
		};
	},
	onLoad() {
		// #ifdef MP-WEIXIN
		this.getHeight();
		this.WechatisLogin();
		// #endif
	},
	methods: {
		// 获取微信右上角胶囊高度
		getHeight() {
			let res = wx.getMenuButtonBoundingClientRect();
			this.titleHeight = res.top;
		},

		// 检测是否登录过 openId是否存在
		WechatisLogin() {
			uni.getStorage({
				key: 'openId',
				success: res => {
					this.isLogin = true;
				}
			});
		},
		// 跳转登录页
		login() {
			// #ifdef MP-WEIXIN
			uni.navigateTo({
				url: '../wechatLogin/wechatLogin'
			});
			this.wechatLogin();
			// #endif
			uni.navigateTo({
				url: '../appLogin/appLogin'
			});
		},
		// 微信登录获取openId
		wechatLogin() {
			uni.getUserProfile({
				desc: '微信授权登录',
				success: res => {
					uni.$emit('login');
				},
				fail: err => {
					// 用户拒绝微信授权
					uni.$emit('rejectLogin');
				}
			});
			// 获取openId
			uni.login({
				timeout: 10000,
				provider: 'weixin',
				success: res => {
					uni.request({
						url: 'https://api.weixin.qq.com/sns/jscode2session',
						method: 'GET',
						data: {
							appid: 'wx3f33e737660f733a',
							secret: 'c39dfca395d2e2b6ed2969f2d77dbae7',
							js_code: res.code
						},
						success: res => {
							uni.setStorage({
								key: 'openId',
								data: res.data.openid
							});
						}
					});
				},
				fail: err => {
					console.log('获取openId失败' + err);
				}
			});
		},
		// 编辑信息
		editInfo() {
			console.log('编辑信息');
		}
	}
};
</script>

<style lang="scss" scoped>
.bgColor {
	height: 100%;
	background-color: $uni-color-bg;
}
.bg {
	width: 100%;
	height: 600rpx;
	background-color: #d9afd9;
	background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
	border-radius: 100% 100% 100% 100% / 0% 0% 18% 18%;
}

.title {
	font-weight: 600;
	line-height: 30px;
	margin-left: 40rpx;
	font-size: 17px;
	color: $uni-color-white;
}

.avatar {
	margin: 40rpx;
}
.info {
	display: flex;
	justify-content: space-around;
	margin-top: 80rpx;
	color: $uni-color-white;
	text-align: center;
}
.contain {
	margin-top: 45rpx;
	width: 100%;
	> .contain_bg {
		background-color: #fff;
		width: 94%;
		margin-left: 3%;
		border-radius: 50rpx;
		display: flex;
		flex-direction: column;
		height: 600rpx;
		> view {
			display: flex;

			height: 80rpx;
			border-bottom: 1px solid #f5f5f5;
			align-items: center;
			> view {
				&:first-child {
					margin-left: 60rpx;
				}
				&:last-child {
					margin-left: 450rpx;
				}
			}
			&:active {
				background-color: #f3f4f6;
			}
			&:first-child {
				border-top-left-radius: 50rpx;
				border-top-right-radius: 50rpx;
			}
			&:last-child {
				border: none;
				border-bottom-left-radius: 50rpx;
				border-bottom-right-radius: 50rpx;
			}
		}
	}
}
</style>
