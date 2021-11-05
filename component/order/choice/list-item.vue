<template>
	<view class="list-item" :class="{'select': ifis}" @tap="change()" >{{ text }}</view>
</template>

<script>
export default {
	data() {
		return {
			ifis: false
		}
	},
	props: {
		text: String
	},
	methods: {
		change() {
			this.ifis = !this.ifis
		}
	}
}
</script>

<style lang="less" scoped>
.list-item {
	box-sizing: border-box;
	display: inline-block;
	width: 180rpx;
	font-size: 24rpx;
	white-space: nowrap;
	text-align: center;
	padding: 20rpx 0;
	border: 2rpx solid #e8e8e8;
	letter-spacing: 2rpx;
	border-radius: 20rpx;
	margin: 15rpx 10rpx;
	transition: all .05s;
}
.select {
	border: 2rpx solid #e86c4d;
	background-color: rgba(254, 112, 41, 0.11);
}
</style>
