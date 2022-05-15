<template>
	<view style="width: 100%;height: 100%;">
		<view v-if="isEmpty"><u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png"></u-empty></view>
		<view class="all_list">
			<view class="list" v-for="item in data" :key="item.id">
				<view class="list_item">
					<view>{{ item.nickName }}</view>
					<view>{{ item.grade }}{{ item.major }}</view>
				</view>
				<u-line></u-line>
				<view class="list_item">
					<view>开始时间 :</view>
					<view>{{ item.leaveStartTime }}</view>
				</view>
				<u-line></u-line>
				<view class="list_item">
					<view>结束时间 :</view>
					<view>{{ item.leaveEndTime }}</view>
				</view>
				<u-line></u-line>
				<view class="list_item" style="color: firebrick;">
					<view >审核状态 :</view>
					<view>{{ item.approvalResult }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getVacation } from '@/config/api.js';
export default {
	data() {
		return {
			data: [],
			isEmpty: false,
			query: {
				endTime: '',
				nickName: '',
				pageNum: 1,
				pageSize: 10,
				startTime: '',
				state: '',
				userAccount: ''
			}
		};
	},
	created() {
		this.getData();
	},
	methods: {
		getData() {
			let userInfo = uni.getStorageSync('user');
			this.query.userAccount = userInfo.account;
			this.query.nickName = userInfo.nickName;
			getVacation(this.query, {
				custom: {
					auth: true
				}
			}).then(res => {
				this.data = res.records;
				if (this.data.length == 0) {
					this.isEmpty = true;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.all_list {
	width: 100%;
	height: 100%;
	.list{
		border: 2rpx solid #000000;
		border-radius: 20rpx;
		margin: 15rpx 10rpx 0 10rpx;
	}
	.list_item {
		display: flex;
		justify-content: center;
		height: 70rpx;
		align-items: center;
		view:nth-child(1){
			width: 50%;
			text-align: center;
		}
		view:nth-child(2){
			width: 50%;
			text-align: right;
			margin-right: 20rpx;
		}
	}
}
</style>
