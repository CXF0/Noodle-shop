<template>
<view class="choice" @touchmove.stop.prevent v-if="isShow">
	<!-- 遮罩层 -->
	<view class="mask" @tap.stop="hide()" />
	<!-- 选项卡 -->
	<view class="option">
		<view class="tips">外卖记得选上打包哦~</view>
		
		<view class="box">
			<view class="text">{{ text }}</view>
			
			<scroll-view class="scroll-view" scroll-y="true">
				<multiple-choice v-for="(item, i) in choice" :key="i" :name="item.name" :list="item.list" />
			</scroll-view>
			
			<view class="bottom">
				<view class="summary">
					<text>总计：</text>
					<text class="company">￥</text>
					<text class="price">{{ price }}</text>
				</view>
				
				<view class="add" @tap.stop="add()">
					<text class="plus">＋</text>
					<text>加入购物车</text>
				</view>
			</view>
		</view>
	</view>
</view>
</template>

<script>
import multipleChoice from "./multiple-choice"
	
export default {
	data() {
		return {
			isShow: false
		}
	},
	props: {
		text: String,
		price: Number,
		choice: Array,
		index: Number
	},
	methods: {
		show() {
			this.isShow = true
		},
		hide() {
			this.isShow = false
		},
		add() {
			// uni.$emit('add', {i: this.index})
			this.$parent.add(this.index)
			this.hide()
		}
	},
	components: {
		multipleChoice
	}
}
</script>

<style lang="less" scoped>
.choice {
	position: fixed;
	z-index: 1000;
	.mask {
		background-color: rgba(0, 0, 0, .4);
		position: fixed;
		top: 0;
		left: 0;
		width: 750rpx;
		height: 100vh;
		z-index: 1001;
	}
	.option {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 25rpx;
		background-color: #f4f4f4;
		width: 670rpx;
		z-index: 1002;
		overflow: hidden;
		.tips {
			color: white;
			// background-color: #ee6a0b;
			background-image: linear-gradient(to right, #e83200, #f0a40a);
			font-weight: 800;
			padding: 10rpx 0;
			text-align: center;
			font-size: 22rpx;
			letter-spacing: 1rpx;
			box-shadow: 0 0 20rpx 0 #ff7626;
		}
		.box {
			padding: 15rpx 35rpx;
			.text {
				font-weight: 800;
				padding-bottom: 15rpx;
				margin-bottom: 20rpx;
				border-bottom: 3rpx solid #a3a3a3;
			}
			.scroll-view {
				height: 33vh;
			}
			.bottom {
				position: relative;
				display: flex;
				padding: 65rpx 0 10rpx;
				border-top: 5rpx solid #eeeeee;
				.summary {
					.company {
						font-size: 32rpx;
						color: #e1251b;
					}
					.price {
						font-size: 44rpx;
						color: #e1251b;
					}
				}
				.add {
					padding: 8rpx 28rpx 18rpx 20rpx;
					position: absolute;
					color: white;
					bottom: 20rpx;
					right: 10rpx;
					border-radius: 20rpx;
					background-image: linear-gradient(to right, #e83200, #f0a40a);
					.plus {
						font-weight: 800;
						font-size: 40rpx;
					}
				}
			}
		}
	}
}
</style>
