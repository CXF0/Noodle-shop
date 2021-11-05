<template>
<view class="order">
	<view class="left">
		<view class="left-top" :class="{'top0': isTop}">
			<left-bar v-for="(item, i) in list" :key="i" :idr="'jump' + i" :text="item" />
		</view>
	</view>
	<view class="rigth">
		<column v-for="(item, i) in data" :key="i" :idr="'jump' + i" :data="item" />
		<!-- 收尾 -->
		<finishing />
	</view>
</view>
</template>

<script>
import leftBar from "./left-bar"
import column from "./column"
import finishing from "./finishing"
	
export default {
	data() {
		return {
			left_top: Number,
			isTop: false,
			list: [
				"重庆小面",
				"牛肉面",
				"羊杂米线",
				"南方抄手",
				"北方饺子",
				"家常菜(实惠)",
				"加臊子，加配菜",
				"配饮品，更巴适"
			],
			data: [
				{
					title: "重庆小面",
					dishes: [
						{
							id: 0,
							text: "重庆特色红油小面(中辣)",
							price: 13.8,
							img: "https://z3.ax1x.com/2021/11/01/I9BPln.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						},
						{
							id: 1,
							text: "刀削杂酱面",
							price: 18.6,
							img: "https://z3.ax1x.com/2021/11/01/I9BnfJ.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						},
						{
							id: 2,
							text: "清汤鸡蛋面",
							price: 16.8,
							img: "https://z3.ax1x.com/2021/11/01/I90HSA.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"加盐",
										"少盐"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						}
					]
				},
				{
					title: "牛肉面",
					dishes: [
						{
							id: 10,
							text: "重庆肥牛肉 牛肉面(满嘴流油)",
							price: 28.8,
							img: "https://z3.ax1x.com/2021/11/01/I9B3m6.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						},
						{
							id: 11,
							text: "重庆瘦牛肉 牛肉面(瘦肉慢炖)",
							price: 26.8,
							img: "https://z3.ax1x.com/2021/11/01/I9BEwT.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						},
						{
							id: 12,
							text: "重庆牛羊杂秘制 牛肉面",
							price: 23.9,
							img: "https://z3.ax1x.com/2021/11/01/I9BPln.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						}
					]
				},
				{
					title: "羊杂米线",
					dishes: [
						{
							id: 20,
							text: "鲜羊杂 羊肉米线(不腻人)",
							price: 19.9,
							img: "https://z3.ax1x.com/2021/11/01/I9BAmV.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						},
						{
							id: 21,
							text: "鲜羊肉 羊肉米线(瘦肉慢炖)",
							price: 26.8,
							img: "https://z3.ax1x.com/2021/11/01/I9BpWj.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						},
						{
							id: 22,
							text: "清汤米线",
							price: 12.8,
							img: "https://z3.ax1x.com/2021/11/01/I9sjjs.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						},
						{
							id: 23,
							text: "红油米线(微辣)",
							price: 12.8,
							img: "https://z3.ax1x.com/2021/11/01/I9BFO0.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜",
										"不要榨菜"
									]
								}
							]
						}
					]
				},
				{
					title: "南方抄手",
					dishes: [
						{
							id: 30,
							text: "红油抄手",
							price: 20.0,
							img: "https://z3.ax1x.com/2021/11/01/I9BnfJ.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜"
									]
								}
							]
						},
						{
							id: 31,
							text: "清汤抄手",
							price: 18.8,
							img: "https://z3.ax1x.com/2021/11/01/I90vTS.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要香菜",
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"加盐",
										"少盐"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜"
									]
								}
							]
						}
					]
				},
				{
					title: "北方饺子",
					dishes: [
						{
							id: 30,
							text: "快煮蘸饺(酱醋)",
							price: 20.0,
							img: "https://z3.ax1x.com/2021/11/01/I9BekF.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "酱醋",
									list: [
										"多酱油",
										"少酱油",
										"不要花生",
										"不要花椒粒",
										"不要加葱",
										"加盐",
										"少盐"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜"
									]
								}
							]
						},
						{
							id: 31,
							text: "慢蒸蒸饺(油碟)",
							price: 21.9,
							img: "https://z3.ax1x.com/2021/11/01/I90LOP.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "油碟",
									list: [
										"多酱油",
										"少酱油",
										"不要花生",
										"不要花椒粒",
										"不要加葱",
										"加盐",
										"少盐",
										"加辣椒",
										"少辣椒"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜"
									]
								}
							]
						},
						{
							id: 32,
							text: "汤煮水饺",
							price: 18.8,
							img: "https://z3.ax1x.com/2021/11/01/I90jw8.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "调料",
									list: [
										"不要花生",
										"不要花椒粒",
										"不要加葱"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								},
								{
									name: "配菜",
									list: [
										"不要青菜"
									]
								}
							]
						}
					]
				},
				{
					title: "家常菜(实惠)",
					dishes: [
						{
							id: 40,
							text: "青椒肉丝盖饭",
							price: 16.8,
							img: "https://z3.ax1x.com/2021/11/01/I90TWd.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								}
							]
						},
						{
							id: 41,
							text: "鱼香肉丝盖饭",
							price: 24.8,
							img: "https://z3.ax1x.com/2021/11/01/I9BmY4.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								}
							]
						},
						{
							id: 42,
							text: "土豆肉丝盖饭",
							price: 18.8,
							img: "https://z3.ax1x.com/2021/11/01/I9BQ61.jpg",
							quantity: 0,
							choice: [
								{
									name: "包装",
									list: [
										"打包"
									]
								},
								{
									name: "口味调整",
									list: [
										"不辣",
										"微辣",
										"中辣",
										"很辣",
										"特辣"
									]
								}
							]
						}
					]
				},
				{
					title: "加臊子，加配菜",
					dishes: [
						{
							id: 50,
							text: "大块牛肉（5块）",
							price: 8.8,
							img: "https://z3.ax1x.com/2021/11/01/I90zFg.jpg",
							quantity: 0,
						},
						{
							id: 51,
							text: "牛杂",
							price: 6.8,
							img: "https://z3.ax1x.com/2021/11/01/I9Biyq.jpg",
							quantity: 0
						},
						{
							id: 52,
							text: "杂酱",
							price: 4.0,
							img: "https://z3.ax1x.com/2021/11/01/I9sXcj.jpg",
							quantity: 0
						},
						{
							id: 53,
							text: "细切羊肉（5片）",
							price: 8.8,
							img: "https://z3.ax1x.com/2021/11/01/I9sxun.jpg",
							quantity: 0
						},
						{
							id: 54,
							text: "羊杂",
							price: 8.8,
							img: "https://z3.ax1x.com/2021/11/01/I90Xef.jpg",
							quantity: 0
						},
						{
							id: 55,
							text: "秘制牛羊杂",
							price: 6.8,
							img: "https://z3.ax1x.com/2021/11/01/I9BMlR.jpg",
							quantity: 0
						},
					]
				},
				{
					title: "配饮品，更巴适",
					dishes: [
						{
							id: 60,
							text: "国宾啤酒",
							price: 3.0,
							img: "https://z3.ax1x.com/2021/11/01/I90qyt.jpg",
							quantity: 0
						},
						{
							id: 61,
							text: "可口可乐",
							price: 2.5,
							img: "https://z3.ax1x.com/2021/11/01/I9BlOx.jpg",
							quantity: 0
						},
						{
							id: 62,
							text: "百事可乐",
							price: 2.5,
							img: "https://z3.ax1x.com/2021/11/01/I9B80K.jpg",
							quantity: 0
						},
						{
							id: 63,
							text: "美年达",
							price: 2.5,
							img: "https://z3.ax1x.com/2021/11/01/I9szBq.jpg",
							quantity: 0
						},
						{
							id: 64,
							text: "酸梅汤",
							price: 1.5,
							img: "https://z3.ax1x.com/2021/11/01/I90bQI.jpg",
							quantity: 0
						},
						{
							id: 65,
							text: "老鹰茶",
							price: 1.2,
							img: "https://z3.ax1x.com/2021/11/01/I9BCSs.jpg",
							quantity: 0
						},
						{
							id: 66,
							text: "冰红糖水",
							price: 3,
							img: "https://z3.ax1x.com/2021/11/01/I9BYkD.jpg",
							quantity: 0
						},
						{
							id: 67,
							text: "七喜",
							price: 2.5,
							img: "https://z3.ax1x.com/2021/11/01/I9BSYQ.jpg",
							quantity: 0
						}
					]
				}
			]
		};
	},
	components: {
		leftBar,
		column,
		finishing
	},
	mounted() {
		const query = uni.createSelectorQuery().in(this);
	
		query.select('.left-top').boundingClientRect(data => {
			this.left_top = data.top
		}).exec();
	},
	onPageScroll(e) {
		if(e.scrollTop >= this.left_top) {
			this.isTop = true
		} else {
			this.isTop = false
		}
	}
}
</script>

<style lang="less" scoped>
.order {
	background-color: #fafafa;
	display: flex;
	.left {
		flex: calc(200 / 750);
		width: 200rpx;
		background-color: #f1f1f1;
		.top0 {
			position: fixed;
			top: 0;
			left: 0;
		}
	}
	.rigth {
		flex: calc(550 / 750);
		width: 550rpx;
	}
}
</style>
