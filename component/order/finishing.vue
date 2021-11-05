<template>
<view class="finishing">
	<view class="bottom">
		<view class="bottom-line" />
	</view>
</view>
</template>

<style lang="less" scoped>
.finishing {
	margin-top: 24rpx;
	.bottom {
		position: relative;
		height: 160rpx;
		.bottom-line {
			width: 70%;
			border-top: 8rpx solid #dadada;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}
</style>
