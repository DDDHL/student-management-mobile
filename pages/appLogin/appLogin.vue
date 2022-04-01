<template>
	<view style="height: 100%;">
		<view class="contain">
			<view>1</view>
			<view>2</view>
			<view>3</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>

.contain{
	display: flex;
	flex-direction: column;
	align-items:center;
	justify-content: center;
	height: 100%;
	> view {
		&:nth-child(2) {
			
		}
		&:nth-child(3) {
			
		}
	}
}

</style>
