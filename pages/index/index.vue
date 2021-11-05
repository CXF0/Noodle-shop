<template>
<view class="index">
	<!-- <scroll-view class="scroll-view" scroll-y="true"> -->
		<!-- 轮播图 -->
		<banner />
		
		<!-- 菜单 -->
		<order ref="order" />
		
		<!-- 购物车 -->
		<shopping-cart />
	<!-- </scroll-view> -->
</view>
</template>

<script>
import banner from "../../component/banner"
import order from "../../component/order/order"
import shoppingCart from "../../component/shopping-cart/shopping-cart"

export default {
	data() {
		return {
			
		}
	},
	components: {
		banner,
		order,
		shoppingCart
	},
	onPageScroll(e) {
		// 如果组件内要使用滚动条相关，在外层必须写生命周期（空写也行，实验得出）
	}
}
</script>