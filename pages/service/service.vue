<template>
	<view>
		<view class="box">
			<view v-for="item in services" :key="item.name">
				<u-icon :name="item.icon" color="#2979ff" size="56rpx"></u-icon>
				<view>{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			services: [
				{ name: '校园卡', icon: 'calendar' },
				{ name: '课程表', icon: 'order' },
				{ name: '成绩查询', icon: 'list-dot' },
				{ name: '教务系统', icon: 'coupon' },
				{ name: '学校地图', icon: 'map' },
				{ name: '学生食堂', icon: 'star' },
				{ name: '教学设施', icon: 'pushpin' }
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.box {
	display: flex;
	text-align: center;
	flex-wrap: wrap;
	margin-left: 4.5vw;
	> view {
		margin: 20rpx 10rpx 0 10rpx;
		width: 20vw;
		height: 20vw;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 20rpx;
		font-size: 24rpx;
		box-shadow: 4rpx 4rpx 10rpx #bfbfbf;
	}
}
</style>
