<template>
	<view class="bg">
		<view style="background: #fff;">
			<u--input
				placeholder="学生姓名 / 学号搜索"
				prefixIcon="search"
				prefixIconStyle="font-size: 22px;color: #909399"
				clearable
				border="bottom"
				v-model="search"
				@confirm="searchData"
				@clear="clearData"
			></u--input>
		</view>
		<view v-if="isEmpty"><u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png"></u-empty></view>
		<view class="total_list">
			<view class="all_list">
				<view class="list" v-for="item in data" :key="item.id" @click="showList(item)">
					<view class="list_item">
						<view>{{ item.nickName }}</view>
						<view>{{ item.grade }}{{ item.major }}</view>
					</view>
					<u-line></u-line>
					<view class="list_item">
						<view>开始时间 :</view>
						<view>{{ item.leaveStartTime }}</view>
					</view>
					<view class="list_item">
						<view>结束时间 :</view>
						<view>{{ item.leaveEndTime }}</view>
					</view>
					<view class="list_item" :style="'color:' + status(item.approvalResult)">
						<view>审核状态 :</view>
						<view>{{ item.approvalResult }}</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup :show="show" mode="center" @close="show = false" :round="10">
			<view class="showList">
				<view class="show_item">
					<view>学生名字 :</view>
					<view>{{ showData.nickName }}</view>
				</view>
				<view class="show_item">
					<view>开始日期 :</view>
					<view>{{ showData.leaveStartTime }}</view>
				</view>
				<view class="show_item">
					<view>结束日期 :</view>
					<view>{{ showData.leaveEndTime }}</view>
				</view>
				<view class="show_item">
					<view>休假原因 :</view>
					<view>{{ showData.leaveReason }}</view>
				</view>
				<view class="show_item"><u-button type="success" text="通过" @click="upload(true)"></u-button></view>
				<view class="show_item"><u-button type="error" text="不通过" @click="upload(false)"></u-button></view>
			</view>
		</u-popup>
		<view v-show="!isEnd"><u-loadmore :status="loadingStatus" bgColor="#f5f5f5" marginTop="0" marginBottom="0" /></view>
	</view>
</template>

<script>
import { getVacation, approval } from '@/config/api.js';
export default {
	data() {
		return {
			search: '',
			data: [],
			isEmpty: false,
			show: false,
			showData: {},
			query: {
				endTime: '',
				nickName: '',
				pageNum: 1,
				pageSize: 10,
				startTime: '',
				state: '',
				userAccount: ''
			},
			role: '',
			isEnd: true,
			loadingStatus: 'loading',
			total: 0,
			bottomTime: 1
		};
	},
	computed: {
		status() {
			return e => {
				if (e == '等待审批中') {
					return '#f87822';
				}
				if (e == '审批通过') {
					return '#91e22e';
				}
				if (e == '审批不通过') {
					return 'red';
				}
			};
		}
	},
	created() {
		this.getData().then(res => {
			if (res.length == 0) {
				this.isEmpty = true;
				return;
			}
			this.data = res;
		});
		this.role = uni.getStorageSync('user').role;
	},
	onReachBottom() {
		if (this.bottomTime == Math.ceil(this.total / 10)) {
			this.isEnd = true;
			return;
		}
		this.isEnd = false;
		this.query.pageNum++;
		this.getData().then(res => {
			console.log(res);
			this.data.push(...res);
			this.bottomTime++;
			if (this.bottomTime == Math.ceil(this.total / 10)) {
				this.isEnd = true;
			}
		});
	},
	methods: {
		searchData() {
			if (isNaN(this.search)) {
				// 名字
				this.query.nickName = this.search;
			} else {
				this.query.userAccount = this.search;
			}
			this.getData();
			this.query.nickName = '';
			this.query.userAccount = '';
		},
		clearData() {
			this.query.nickName = '';
			this.query.userAccount = '';
			this.getData();
		},
		upload(result) {
			approval(
				{ id: this.showData.id, result: result },
				{
					custom: {
						auth: true
					}
				}
			).then(res => {
				this.show = false;
				uni.showToast({
					icon: 'success',
					title: res.message
				});
			});
		},
		showList(e) {
			if (this.role == '学生') {
				return;
			}
			this.showData = e;
			this.show = true;
		},
		getData() {
			return new Promise((resolve, reject) => {
				getVacation(this.query, {
					custom: {
						auth: true
					}
				}).then(res => {
					this.total = res.total;
					resolve(res.records);
				});
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100%;
	background-color: #f5f5f5;
}
.all_list {
	width: 100%;
	height: 100%;
	&:first-child {
		margin-top: 20rpx;
	}
	.list {
		box-shadow: 5px 5px 5px #dedede;
		border-radius: 20rpx;
		margin: 0 20rpx 30rpx 20rpx;
		background: #fff;
	}
	.list_item {
		display: flex;
		justify-content: center;
		height: 70rpx;
		align-items: center;
		view:nth-child(1) {
			width: 50%;
			text-align: center;
		}
		view:nth-child(2) {
			width: 50%;
			text-align: right;
			margin-right: 30rpx;
		}
	}
}
.total_list {
	background-color: #f5f5f5;
	padding-bottom: 30rpx;
}
.showList {
	width: 550rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	& .show_item {
		width: 450rpx;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		& view:last-child {
			width: 250rpx;
		}
	}
	& view:last-child {
		margin-bottom: 30rpx;
	}
}
</style>
