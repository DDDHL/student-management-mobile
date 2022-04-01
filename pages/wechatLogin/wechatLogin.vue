<template>
	<view>
		<view><u-loading-page :loading="true" loading-text="微信授权登录中..." image="/static/logo/wechat_gray.png"></u-loading-page></view>
		<u-notify ref="uNotify" message="Hi uView"></u-notify>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	onLoad() {
		// 用户拒绝微信授权
		uni.$on('rejectLogin', () => {
			this.$refs.uNotify.show({
				type: 'error',
				bgColor: '#f56c6c',
				message: '请授权登录'
			});
			setTimeout(() => {
				this.goback();
			}, 2000);
		});

		// 用户同意微信授权
		uni.$on('login', () => {
			this.isSuccess = true
			uni.reLaunch({
				url:'../appLogin/appLogin'
			})
		});
	},
	methods: {
		// 授权失败跳转到个人中心
		goback() {
			uni.switchTab({
				url:'../user/user'
			})();
		}
	},
	onUnload() {
		uni.$off('rejectLogin');
		uni.$off('login');
	}
};
</script>

<style lang="scss" scoped></style>
