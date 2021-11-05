<template>
<view class="banner">
	<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		<swiper-item class="swiper-item" v-for="(item, i) in data" :key="i">
			<!-- <view class="sign">{{ item.sign }}</view> -->
			<image class="image" @tap="previewImg(item.url)" :src="item.url" />
		</swiper-item>
	</swiper>
</view>
</template>

<script>
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 4000,
			duration: 800,
			data: [
				{
					sign: "店铺面貌",
					url: "https://z3.ax1x.com/2021/11/01/I93O1S.jpg"
				},
				{
					sign: "店铺面貌",
					url: "https://z3.ax1x.com/2021/11/01/I93jXQ.jpg"
				},
				{
					sign: "店内装修",
					url: "https://z3.ax1x.com/2021/11/01/I93z0s.jpg"
				},
				{
					sign: "店内装修",
					url: "https://z3.ax1x.com/2021/11/01/I93xmj.jpg"
				},
				{
					sign: "后厨环境",
					url: "https://z3.ax1x.com/2021/11/01/I93X6g.jpg"
				},
				{
					sign: "后厨环境",
					url: "https://z3.ax1x.com/2021/11/01/I98S7n.jpg"
				}
			]
		}
	},
	methods: {
		previewImg(current) {
			// 图片预览功能测试失败
			// const urls = this.secondData.map(item => {
			// 	return item.url
			// })
			// uni.previewImage({
			// 	current,
			// 	urls
			// })
		}
	}
}
</script>

<style lang="less" scoped>
.banner {
	position: relative;
	box-shadow: 0 0 8px rgba(0, 0, 0, .4);
	.swiper {
		height: 400rpx;
		.swiper-item {
			// background-color: black;
			position: relative;
			.sign {
				text-align: center;
				position: absolute;
				top: 20rpx;
				left: 20rpx;
				opacity: .5;
				letter-spacing: 5rpx;
				font-weight: 800;
				z-index: 20;
			}
			.image {
				
				width: 750rpx;
				height: 400rpx;
				// max-width: calc(540px / 1.72);
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
}
</style>
