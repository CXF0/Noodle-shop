<template>
<view
	class="left-bar"
	:class="{'highlight': light_up == idr}"
	@tap="jump()"
	@touchmove.stop.prevent
	>{{ text }}
</view>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	props: {
		idr: String,
		text: String
	},
	computed: {
		light_up() {
			return this.$store.state.left_bar_highlight
		}
	},
	methods: {
		jump() {
			this.$store.commit('left_bar_highlight_change', this.idr)
			
			uni.pageScrollTo({
				scrollTop: this.$store.getters.jump_get,
				duration: 0
			})
		}
	}
}
</script>

<style lang="less" scoped>
.left-bar {
	box-sizing: border-box;
	width: 200rpx;
	padding-top: 40rpx;
	padding-bottom: 40rpx;
	padding-left: 17rpx;
	padding-right: 25rpx;
	text-align: center;
	color: #666666;
	font-size: 26rpx;
	word-wrap: break-word;
	border-left: 8rpx solid #f1f1f1;
	transition: all .1s;
}
.highlight {
	background-color: #fafafa;
	color: black;
	border-left: 8rpx solid #e1251b;
}
</style>