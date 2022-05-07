<template>
	<view>
		<view><u-loading-page :loading="true" loading-text="微信授权登录中..." image="/static/logo/wechat_gray.png"></u-loading-page></view>
		<u-notify ref="uNotify" message="Hi uView"></u-notify>
	</view>
</template>

<script>
import { login,checkWx } from '../../config/api.js';
export default {
	data() {
		return {
			query: {
				userAccount: '',
				password: '',
				openId: '',
				rememberMe: false
			},
		};
	},
	onLoad() {
		// 用户拒绝微信授权
		uni.$on('rejectLogin', () => {
			this.backToUser('请授权登录!')
		});
		// 用户同意微信授权
		uni.$on('login', () => {
			this.openIdLogin()
		});
	},
	methods: {
		// 授权失败跳转到个人中心
		goback() {
			uni.switchTab({
				url:'../user/user'
			});
		},
		// 使用openid登录
		openIdLogin(){
			const openId = uni.getStorageSync('openId');
			if (!openId) {
				this.backToUser('服务器出错，请重试!')
				return
			}
			// 登录请求
			checkWx(openId).then(res => {
				console.log(res)
			});
			uni.reLaunch({
				url:'../appLogin/appLogin?text=绑定账号'
			})
		},
		// 出错返回用户页面
		backToUser(msg){
			this.$refs.uNotify.show({
				type: 'error',
				bgColor: '#f56c6c',
				message: msg
			});
			uni.removeStorage({
				key:'openId'
			})
			setTimeout(() => {
				this.goback();
			}, 1000);
		}
	},
	onUnload() {
		uni.$off('rejectLogin');
		uni.$off('login');
	}
};
</script>

<style lang="scss" scoped></style>
