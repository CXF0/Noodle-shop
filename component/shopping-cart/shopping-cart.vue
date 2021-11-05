<template>
<view class="shopping-cart" @tap="carChange()">
	
	<view class="rough">
		<image class="img" src="https://z3.ax1x.com/2021/11/01/I9FwsU.jpg" />
		
		<view class="count">10</view>
		
		<view class="calculation">
			<view class="total-price">
				<text class="name">总计：</text>
				<text class="price">￥</text>
				<text class="number">998</text>
			</view>
			<view class="distribution">
				<text class="name">配送费：</text>
				<text class="price">￥</text>
				<text class="number">3</text>
			</view>
		</view>
		
		<view class="settlement" @tap.stop="settlement()">去结算</view>
	</view>
	
	<inside-car ref="inside_car" />
</view>
</template>

<script>
import insideCar from "./inside-car"
	
export default {
	data() {
		return {
			
		}
	},
	methods: {
		carChange() {
			this.$refs.inside_car.change()
		},
		settlement() {
			uni.showToast({
				title:"结算"
			})
		}
	},
	components: {
		insideCar
	}
}
</script>

<style lang="less" scoped>
.shopping-cart {
	.rough {
		color: white;
		position: fixed;
		width: 700rpx;
		height: 90rpx;
		bottom: 40rpx;
		left: 50%;
		transform: translateX(-50%);
		background-image: linear-gradient(to right, #f0a40a, #e83200);
		border-radius: 80rpx;
		z-index: 100;
		text-shadow: -1px 1px 0 #e1251b, 1px 1px 0 #e1251b, 1px -1px 0 #e1251b, -1px -1px 0 #e1251b;
		.img {
			width: 120rpx;
			height: 120rpx;
			border-radius: 120rpx;
			border: 5rpx solid #e1251b;
			position: absolute;
			left: 30rpx;
			top: -40rpx;
		}
		.count {
			text-shadow: none !important;
			font-size: 20rpx;
			background-color: #e1251b;
			position: absolute;
			left: 120rpx;
			bottom: 0;
			width: 38rpx;
			height: 38rpx;
			text-align: center;
			line-height: 39rpx;
			border-radius: 38rpx;
		}
		.calculation {
			height: 90rpx;
			position: absolute;
			left: 180rpx;
			.total-price {
				line-height: 40rpx;
				.name {
					font-size: 24rpx;
				}
				.number {
					font-size: 26rpx;
				}
			}
			.distribution {
				.name {
					font-size: 24rpx;
				}
				.number {
					font-size: 26rpx;
				}
			}
		}
		.settlement {
			border-top-right-radius: 90rpx;
			border-bottom-right-radius: 90rpx;
			line-height: 90rpx;
			padding: 0 40rpx;
			height: 90rpx;
			font-size: 26rpx;
			background-image: linear-gradient(to right, #e83200, #f0a40a);
			position: absolute;
			right: 0;
			border-left: 10rpx solid #e1e0d9;
		}
	}
}
</style>
