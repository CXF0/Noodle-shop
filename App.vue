<script>	
export default {
	onLaunch: function() {
		console.log('App Launch')
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style>
/* 每个页面公共css */
/* 小程序端,必须使用https链接使用字体 */
/* @font-face {
	font-family: 'zcoolwenyiti';
	src: url('https://') format('truetype');
} */

body {
	background-color: #f4f4f4;
}

view, text, image {
	font-size: 30rpx;
}

.t0 {
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
	z-index: 10;
}
</style>
