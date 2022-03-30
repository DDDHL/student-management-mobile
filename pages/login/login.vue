<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="">
			<button type="default" @click="wechatLogin">登录</button>
		</view>
		<!-- #endif -->

		<!-- #ifdef APP-PLUS -->
		<view class="">
			APP
		</view>
		<!-- #endif -->
		
		<u-loading-page :loading="isloading" loading-text="登录中..."></u-loading-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isloading:false
			}
		},
		onLoad(){
			this.islogin()
		},
		methods: {
			// 检测是否登录过 openid是否存在
			islogin(){
				uni.getStorage({
					key:'openid',
					success: function (res) {
						setTimeout(()=>{
							uni.switchTab({
								url:'../index/index'
							})
						},2000)
						//this.isloading = true
					}
				})
			},
			// 微信登录获取openid
			wechatLogin() {
				uni.getUserProfile({
					desc: '微信授权登录',
					success: (res) => {
						console.log(res)
					},
					fail(err) {
						console.log('用户拒绝授权', err)
					}
				})
				uni.login({
					timeout: 10000,
					provider: 'weixin',
					success: (res) => {
						uni.request({
							url: 'https://api.weixin.qq.com/sns/jscode2session',
							method: 'GET',
							data: {
								appid: 'wx3f33e737660f733a',
								secret: 'c39dfca395d2e2b6ed2969f2d77dbae7',
								js_code: res.code
							},
							success: (res) => {
								console.log('用户的openid:' + res.data.openid)
								uni.setStorage({
									key:'openid',
									data:res.data.openid
								})
							}
						});
					},
					fail: (err) => {
						console.log('登录失败' + err)
					}
				})
			}
		}
	}
</script>

<style>

</style>
