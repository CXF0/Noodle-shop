<template>
<view class="multiple-choice">
	<view class="name">{{ name }}</view>
	<view class="list">
		<list-item v-for="(item, i) in list" :key="i" :text="item" />
	</view>
</view>
</template>

<script>
import listItem from "./list-item"
	
export default {
	data() {
		return {
			
		}
	},
	props: {
		name: String,
		list: Array
	},
	components: {
		listItem
	}
}
</script>

<style lang="less" scoped>
.multiple-choice {
	margin-bottom: 40rpx;
	.name {
		padding-left: 10rpx;
	}
	.list {
		
	}
}
</style>
