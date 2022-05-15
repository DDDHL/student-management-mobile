<template>
	<view class="bg">
		<image src="../../static/userInfo_bg.png" mode="aspectFill" class="head_bg"></image>
		<view class="head" :style="'top:' + backHeight + 'rpx'"><u-icon name="arrow-left" size="28" @click="goback"></u-icon></view>
		<view class="head_avatar"><u-avatar :src="userInfo.avatarUrl" shape="circle" size="110rpx" mode="aspectFill"></u-avatar></view>
		<view class="text">修改个人信息</view>
		<view class="input">
			<view>姓名 :</view>
			<view><u--input placeholder="请输入内容" border="surround" v-model="userInfo.nickName" disabled></u--input></view>
		</view>
		<view class="input">
			<view>学号 :</view>
			<view><u--input placeholder="请输入内容" border="surround" v-model="userInfo.userAccount" disabled></u--input></view>
		</view>
		<view class="input">
			<view>性别 :</view>
			<view><u--input placeholder="请输入内容" border="surround" v-model="userInfo.sex" disabled></u--input></view>
		</view>
		<view class="input">
			<view>角色 :</view>
			<view><u--input placeholder="请输入内容" border="surround" v-model="userInfo.roles[0].roleName" disabled></u--input></view>
		</view>
		<view class="input">
			<view>邮箱 :</view>
			<view><u--input placeholder="请输入内容" border="surround" v-model="userInfo.email"></u--input></view>
		</view>
		<view class="input">
			<view>电话 :</view>
			<view><u--input placeholder="请输入内容" border="surround" v-model="userInfo.phone"></u--input></view>
		</view>
		<view class="upBtn"><u-button color="#97d9e1" text="保存修改" @click="save" shape="circle"></u-button></view>
	</view>
</template>

<script>
import { updateInfo, getInfo } from '@/config/api.js';
export default {
	data() {
		return {
			userInfo: {},
			backHeight: 50
		};
	},
	created() {
		this.getData()
		// #ifdef MP-WEIXIN
		this.getHeight();
		// #endif
	},
	methods: {
		getData(){
			getInfo({}, {
				custom: {
					auth: true
				}
			}).then(res => {
				this.userInfo = res
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
			});
		},
		getHeight() {
			let res = wx.getMenuButtonBoundingClientRect();
			this.backHeight = res.top * 2;
		},
		goback() {
			uni.navigateBack({});
		},
		save() {
			updateInfo(this.userInfo, {
				custom: {
					auth: true
				}
			}).then(res=>{
				this.getData()
				uni.showToast({
					title:'修改成功'
				})
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.head_bg {
		width: 100%;
	}
	image {
		height: 35%;
	}
	.text {
		align-self: flex-end;
		margin: 10rpx 60rpx;
	}
}
.head {
	position: absolute;
	left: 2%;
}
.head_avatar {
	position: absolute;
	border: 6rpx solid #fff;
	border-radius: 58rpx;
	top: calc(35% - 58rpx);
	left: 5%;
}
.input {
	display: flex;
	width: 100%;
	align-items: center;
	margin: 5% 0 0 15%;
	& > view:nth-child(2) {
		width: 70%;
	}
	& > view:nth-child(1) {
		margin-right: 3%;
	}
}
.upBtn {
	width: 80%;
	margin-top: 3%;
}
</style>
