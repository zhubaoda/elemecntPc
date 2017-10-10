<style lang="less" scoped>
	.home {
		.title {
			color: #fa6705;
			font-size: 80px;
		}
	}
</style>
<template>
	<div class="home">
		<div class="title" @click="getInfor">首页</div>
		<HelloWorlds></HelloWorlds>
	</div>
</template>
<script>
	import HelloWorlds from '../components/HelloWorld.vue'
	import axios from 'axios'
	export default {
		name: 'home',
		data() {
			return {

			}
		},
		components: {
			HelloWorlds
		},
		methods:{
			getInfor(){
				//axios调用接口
				axios.get('/static/data/name.json').then((suc)=>{
					console.log(1,suc)
				}).catch((err)=>{
					console.log(2,err)
				})
			}
		}
	}
</script>
