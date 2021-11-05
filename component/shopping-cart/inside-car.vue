<template>
<view class="inside-car" @touchmove.stop.prevent v-if="isShow">
	<!-- 遮罩层 -->
	<view class="mask" @tap.stop="change()" />
	
	<view class="selected" @tap.stop>
		<view class="top">
			<text class="left">购物车</text>
			<text class="right">清空</text>
		</view>
		
		<scroll-view class="scroll-view" scroll-y="true">
			<view class="dishes" v-for="(item, i) in data" :key="i" v-if="item.quantity > 0">
				<view class="left">
					<image class="img" :src="item.img" />
				</view>
				<view class="right">
					<text class="text" v-text="item.text" />
					<text class="price" v-text="'￥' + item.price" />
					<view class="change">
						<text class="cut" @tap="cut(i)" v-text="'－'" />
						<text class="quantity" v-text="item.quantity" />
						<text class="add" @tap="add(i)" v-text="'＋'" />
					</view>
				</view>
			</view>
			
			<view class="occupy-high" />
		</scroll-view>
	</view>
</view>
</template>

<script>
export default {
	data() {
		return {
			isShow: false,
			data: [
				{
					id: 10,
					text: "重庆肥牛肉 牛肉面(满嘴流油)",
					price: 28.8,
					quantity: 99,
					img: "https://z3.ax1x.com/2021/11/01/I9B3m6.jpg"
				},
				{
					id: 10,
					text: "重庆肥牛肉 牛肉面(满嘴流油)",
					price: 28.8,
					quantity: 99,
					img: "https://z3.ax1x.com/2021/11/01/I9B3m6.jpg"
				},
				{
					id: 10,
					text: "重庆肥牛肉 牛肉面(满嘴流油)",
					price: 28.8,
					quantity: 99,
					img: "https://z3.ax1x.com/2021/11/01/I9B3m6.jpg"
				},
				{
					id: 10,
					text: "重庆肥牛肉 牛肉面(满嘴流油)",
					price: 28.8,
					quantity: 99,
					img: "https://z3.ax1x.com/2021/11/01/I9B3m6.jpg"
				},
				{
					id: 10,
					text: "重庆肥牛肉 牛肉面(满嘴流油)",
					price: 28.8,
					quantity: 1,
					img: "https://z3.ax1x.com/2021/11/01/I9B3m6.jpg"
				},
				{
					id: 10,
					text: "重庆肥牛肉 牛肉面(满嘴流油)",
					price: 28.8,
					quantity: 99,
					img: "https://z3.ax1x.com/2021/11/01/I9B3m6.jpg"
				},
				{
					id: 50,
					text: "大块牛肉",
					price: 8.8,
					quantity: 2,
					img: "https://z3.ax1x.com/2021/11/01/I90zFg.jpg"
				},
				{
					id: 64,
					text: "酸梅汤",
					price: 1.5,
					quantity: 2,
					img: "https://z3.ax1x.com/2021/11/01/I90bQI.jpg"
				}
			]
		}
	},
	methods: {
		change() {
			this.isShow = !this.isShow
		},
		add(i) {
			if(this.data[i].quantity + 1 <= 99)
				this.data[i].quantity++
		},
		cut(i) {
			if(this.data[i].quantity - 1 >= 0)
				this.data[i].quantity--
		}
	}
}
</script>

<style lang="less" scoped>
.inside-car {
	.mask {
		background-color: rgba(0, 0, 0, .4);
		position: fixed;
		top: 0;
		left: 0;
		width: 750rpx;
		height: 100vh;
		z-index: 50;
	}
	.selected {
		background-color: white;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		width: 750rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 50;
		.top {
			background-color: #f4f4f4;
			width: 750rpx;
			// position: relative;
			display: flex;
			justify-content: flex-end;
			color: #666666;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			.left {
				margin-right: auto;
			}
		}
		.scroll-view {
			max-height: 60vh;
			// min-height: 40vh;
			.dishes {
				display: flex;
				border-bottom: 1rpx solid #eee;
				.left {
					border-right: 1rpx solid #eee;
					.img {
						margin: 15rpx;
						box-sizing: border-box;
						display: block;
						width: 175rpx;
						height: 175rpx;
					}
				}
				.right {
					width: 100%;
					position: relative;
					.text {
						font-size: 26rpx;
						font-weight: 800;
						position: absolute;
						left: 20rpx;
						top: 16rpx;
					}
					.price {
						color: #e1251b;
						position: absolute;
						left: 16rpx;
						bottom: 20rpx;
					}
					.change {
						position: absolute;
						right: 20rpx;
						bottom: 20rpx;
						text-align: center;
						.quantity {
							position: relative;
							bottom: 2rpx;
							background-color: #f7f7f7;
							padding: 2rpx 0;
							width: 75rpx;
							display: inline-block;
							border-radius: 12rpx;
						}
						.add, .cut {
							display: inline-block;
							width: 50rpx;
							color: #e1251b;
							font-size: 50rpx;
						}
					}
				}
			}
			.occupy-high {
				height: 200rpx;
			}
		}
	}
}

</style>
