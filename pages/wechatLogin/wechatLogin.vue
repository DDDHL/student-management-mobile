<template>
	<view>
		<view><u-loading-page :loading="true" loading-text="微信授权登录中..." image="/static/logo/wechat_gray.png"></u-loading-page></view>
		<u-notify ref="uNotify" message="Hi uView"></u-notify>
	</view>
</template>

<script>
import { login, checkWx } from '../../config/api.js';
export default {
	data() {
		return {
			query: {
				userAccount: '',
				password: '',
				openId: '',
				rememberMe: false
			}
		};
	},
	onLoad() {
		// 用户拒绝微信授权
		uni.$on('rejectLogin', msg => {
			this.backToUser(msg, 'error');
		});
		// 用户同意微信授权
		uni.$on('login', () => {
			this.openIdLogin();
		});
	},
	methods: {
		// 授权失败跳转到个人中心
		goback() {
			uni.switchTab({
				url: '../user/user',
				success: function(e) {
					var page = getCurrentPages().pop();
					if (page == undefined || page == null) return;
					page.onLoad();
				}
			});
		},
		// 使用openid登录
		openIdLogin() {
			const openId = uni.getStorageSync('openId');
			if (!openId) {
				this.backToUser('服务器出错，请重试!', 'error');
				return;
			}
			// 登录请求
			checkWx(openId).then(res => {
				if (res == '10018') {
					this.$refs.uNotify.show({
						type: 'success',
						message: '微信首次使用需要绑定ixh账号'
					});
					setTimeout(() => {
						uni.reLaunch({
							url: '../appLogin/appLogin?text=绑定账号'
						});
					}, 1000);
					return;
				}
				// 登录成功保存信息
				this.saveUserInfo();
			});
		},
		// 获取用户信息并保存
		saveUserInfo() {
			this.$store.state.hasLogin = true
			const openId = uni.getStorageSync('openId');
			login({ openId: openId, rememberMe: false }).then(res => {
				let data = {
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
				};
				uni.setStorageSync('user', data);
				uni.setStorageSync('token', res.token);
				this.backToUser('登录成功!', 'success');
			});
		},
		// 出错返回用户页面
		backToUser(msg, type) {
			this.$refs.uNotify.show({
				type: type,
				message: msg
			});
			if (type == 'error') {
				uni.removeStorage({
					key: 'openId'
				});
			}
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
