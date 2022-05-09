<template>
	<view style="height: 100%;">
		<view class="contain">
			<view><u--image :showLoading="true" src="/static/logo.png" width="80px" height="80px"></u--image></view>
			<view>
				<u--input
					placeholder="请输入账号"
					prefixIcon="account"
					prefixIconStyle="font-size: 22px;color: #909399"
					border="bottom"
					v-model="query.userAccount"
					clearable
				></u--input>
			</view>
			<view>
				<u--input
					placeholder="请输入密码"
					prefixIcon="lock"
					prefixIconStyle="font-size: 22px;color: #909399"
					password
					border="bottom"
					v-model="query.password"
					clearable
				></u--input>
			</view>
			<view><u-button color="#97d9e1" :text="text" @click="login" :disabled="disabled"></u-button></view>
		</view>
		<!-- #ifdef APP -->
		<view class="footer" @click="wechatLogin"><u-icon name="weixin-circle-fill" color="#00bf00" size="28"></u-icon></view>
		<!-- #endif -->
	</view>
</template>

<script>
/* 加密 */
import { Encrypt } from '../../utils/secret.js';
import { login } from '../../config/api.js';
export default {
	data() {
		return {
			query: {
				userAccount: '',
				password: '',
				openId: '',
				rememberMe: false
			},
			disabled: true,
			text: '登录'
		};
	},
	watch: {
		query: {
			deep: true,
			handler() {
				if (this.query.password && this.query.userAccount) {
					this.disabled = false;
					return;
				}
				this.disabled = true;
			}
		}
	},
	onLoad(options) {
		// #ifdef MP-WEIXIN
		this.text = options.text;
		// #endif
	},
	methods: {
		// 绑定登录
		login() {
			const value = uni.getStorageSync('openId');
			this.query.openId = value;
			// 密码加密
			let params = JSON.parse(JSON.stringify(this.query));
			params.password = Encrypt(this.query.password);
			// 登录请求
			login(params).then(res => {
				uni.setStorage({
					key: 'user',
					data: {
						nickName: res.nickName,
						avatarUrl: res.avatarUrl,
						department: res.department,
						grade: res.grade,
						email: res.email,
						majorClass: res.majorClass,
						major: res.major,
						phone: res.phone,
						role: res.roles[0].roleName,
						sex: res.sex,
						account: res.userAccount
					}
				});
				uni.setStorage({
					key: 'token',
					data: res.token
				});
				this.$store.state.hasLogin = true
				uni.reLaunch({
					url: '../user/user'
				});
			});
		},
		// #ifdef APP
		// 微信登录获取openId
		wechatLogin() {
			this.$u.toast('还未开放微信登录');
			//console.log('使用微信登录');
		}
		// #endif
	}
};
</script>

<style lang="scss" scoped>
.contain {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	> view {
		margin-top: -400rpx;
		&:nth-child(2) {
			margin-top: 100rpx;
			width: 60%;
		}
		&:nth-child(3) {
			margin-top: 50rpx;
			width: 60%;
		}
		&:nth-child(4) {
			margin-top: 70rpx;
			width: 60%;
		}
	}
}
.footer {
	position: absolute;
	bottom: 2%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
