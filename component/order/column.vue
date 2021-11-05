<template>
<view class="column">
	<!-- 标题占位 -->
 	<!--<view :id="idr" class="title seize-a-seat" :class="{'top0': isTop0}" v-show="floating_data.title">{{ floating_data.title }}</view> -->
	<view :id="idr" class="title seize-a-seat" v-show="floating_data.title">{{ floating_data.title }}</view>
	<!-- 标题显示 -->
	<view class="title" :class="{'top0': isTop0}" :id="idr" v-show="floating_data.title">{{ floating_data.title }}</view>
	<!-- 商品简述 -->
	<view class="dishes" v-for="(item, i) in floating_data.dishes" :key="i">
		<view class="left">
			<image class="img" :src="item.img" />
		</view>
		<view class="right">
			<text class="text" v-text="item.text" />
			<text class="price" v-text="'￥' + item.price" />
			
			<text class="have-choice" @tap="show(i)" v-if="item.choice != undefined">
				选规格
				<text class="quantity" v-if="item.quantity > 0" v-text="item.quantity" />
			</text>
			<text class="add-to" v-text="'＋'" @tap.stop="add(i)" v-if="item.quantity == 0 && item.choice == undefined" />
			<view class="change" @click.stop v-if="item.quantity > 0 && item.choice == undefined">
				<text class="cut" @tap="cut(i)" v-text="'－'" />
				<text class="quantity" v-text="item.quantity" />
				<text class="add" @tap="add(i)" v-text="'＋'" />
			</view>
		</view>
		
		<!-- 选择规格 -->
		<choice ref="choice" :text="item.text" :price="item.price" :choice="item.choice" :index="i" />
	</view>
</view>
</template>

<script>
import choice from './choice/choice'

export default {
	data() {
		return {
			title_top: Number,
			isTop0: false,
			floating_data: {}
		}
	},
	props: {
		data: Object,
		idr: String
	},
	created() {
		this.floating_data = this.data
		// uni.$on('add', (msg) => {
		// 	this.add(msg.i)
		// })
	},
	onPageScroll(e) {
		if(e.scrollTop >= this.title_top) {
			this.isTop0 = true
			this.$store.commit('left_bar_highlight_change', this.idr)
		} else {
			this.isTop0 = false
		}
	},
	mounted() {
		const query = uni.createSelectorQuery().in(this);
	
		query.select('.title').boundingClientRect(s => {
			this.title_top = s.top
			this.$store.commit('jump_change', {
				name: this.idr,
				top: s.top
			})
		}).exec();
	},
	methods: {
		add(i) {
			if(this.floating_data.dishes[i].quantity + 1 <= 99)
				this.floating_data.dishes[i].quantity++
		},
		cut(i) {
			if(this.floating_data.dishes[i].quantity - 1 >= 0)
				this.floating_data.dishes[i].quantity--
		},
		show(i) {
			this.$refs.choice[i].show()
		}
	},
	components: {
		choice
	}
}
</script>

<style lang="less" scoped>
.column {
	position: relative;
	.title {
		// font-family: 'zcoolwenyiti';
		letter-spacing: 9rpx;
		color: white;
		padding: 15rpx 0;
		width: 100%;
		text-align: center;
		font-size: 40rpx;
		font-weight: 800;
		background-color: #e1251b;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		width: 550rpx;
	}
	.top0 {
		width: 550rpx;
		position: fixed;
		top: 0;
		right: 0;
	}
	.seize-a-seat {
		position: relative;
		opacity: 0;
	}
	.dishes {
		background-color: white;
		display: flex;
		margin: 30rpx 20rpx;
		box-shadow: 0 0 5rpx 0 #ccc;
		.left {
			border-right: 1rpx solid #eaeaea;
			.img {
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
			.have-choice {
				border-radius: 12rpx;
				padding: 8rpx 10rpx;
				font-size: 24rpx;
				color: white;
				background-color: #f05b04;
				font-weight: 800;
				position: absolute;
				right: 20rpx;
				bottom: 20rpx;
				.quantity {
					font-size: 18rpx;
					position: absolute;
					right: -16rpx;
					top: -16rpx;
					border-radius: 9999px;
					width: 32rpx;
					height: 32rpx;
					text-align: center;
					line-height: 32rpx;
					background-color: #e1251b;
				}
			}
			.add-to {
				border-radius: 99999px;
				width: 45rpx;
				height: 45rpx;
				font-size: 45rpx;
				text-align: center;
				line-height: 40rpx;
				color: white;
				background-color: #f05b04;
				font-weight: 800;
				position: absolute;
				right: 20rpx;
				bottom: 20rpx;
			}
			.change {
				position: absolute;
				right: 15rpx;
				bottom: 15rpx;
				text-align: center;
				.quantity {
					position: relative;
					bottom: 2rpx;
					background-color: #f7f7f7;
					padding: 2rpx 0;
					width: 65rpx;
					display: inline-block;
					border-radius: 12rpx;
				}
				.add, .cut {
					display: inline-block;
					width: 45rpx;
					color: #e1251b;
					font-size: 50rpx;
				}
			}
		}
	}
}
</style>