<template>
	<view>
		<view class="bg">
			<view class="title" :style="'padding-top:' + titleHeight + 'px'">我的</view>

			<u-row customStyle="margin-bottom: 10px;color: #F1F1F1;">
				<u-col span="3">
					<view class="avatar"><u-avatar :src="userInfo.avatarUrl" shape="circle" size="110rpx" mode="aspectFill"></u-avatar></view>
				</u-col>
				<u-col span="6">
					<view style="font-weight: 700;font-size: 35rpx;" v-if="userInfo.account">{{ userInfo.nickName }}</view>
					<view style="font-weight: 700;font-size: 35rpx;" v-else @click="login()">登录</view>
				</u-col>
				<u-col span="3">
					<view v-if="userInfo.account" style="display: flex;" @click="editInfo">
						<u-icon name="edit-pen" color="#F1F1F1" size="32rpx"></u-icon>
						<view style="font-size: 28rpx;">编辑信息</view>
					</view>
				</u-col>
			</u-row>

			<view class="info" v-if="userInfo.account">
				<view>
					<view class="info_text">{{ userInfo.grade }}</view>
					<view>年级</view>
				</view>
				<view>
					<view class="info_text">{{ userInfo.account }}</view>
					<view>账号</view>
				</view>
				<view>
					<view class="info_text">{{ userInfo.role }}</view>
					<view>职位</view>
				</view>
			</view>

			<view class="contain" :style="'margin-top:' + listHeight + 'rpx'">
				<view class="contain_bg">
					<view v-for="item in options" :key="item.name">
						<view>{{ item.name }}</view>
						<view><u-icon name="arrow-right" size="20"></u-icon></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { testToken } from '@/utils/token.js';
export default {
	data() {
		return {
			titleHeight: 50,
			isLogin: false,
			listHeight: 160,
			userInfo: {},
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
		this.checkToken();
		// #ifdef MP-WEIXIN
		this.getHeight();
		// #endif
	},
	methods: {
		// 验证token
		checkToken() {
			testToken().then(res => {
				uni.getStorage({
					key: 'user',
					success: res => {
						console.log(res)
						this.userInfo = res.data;
						this.listHeight = 55;
					}
				});
			}).catch(err=>{
				console.log(err)
				this.userInfo = {}
			})
		},
		// 获取微信右上角胶囊高度
		getHeight() {
			let res = wx.getMenuButtonBoundingClientRect();
			this.titleHeight = res.top;
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
.bg {
	width: 100%;
	height: 600rpx;
	background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
	border-radius: 100% 100% 100% 100% / 0% 0% 18% 18%;
}

.title {
	font-weight: 600;
	line-height: 30px;
	margin-left: 40rpx;
	font-size: 35rpx;
	color: $uni-color-white;
}

.avatar {
	margin: 40rpx;
}
.info {
	display: flex;
	justify-content: space-around;
	margin-top: 80rpx;
	color: #f5f5f5;
	text-align: center;
	font-size: 32rpx;
}
.contain {
	width: 100%;
	> .contain_bg {
		background-color: #fff;
		width: 94%;
		margin-left: 3%;
		border-radius: 50rpx;
		display: flex;
		flex-direction: column;
		font-size: 32rpx;
		height: 600rpx;
		box-shadow: 5rpx 5rpx 50rpx #cccccc;
		margin-bottom: 100rpx;
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
.info_text {
	font-weight: 700;
	color: #ffff7f;
}
</style>
