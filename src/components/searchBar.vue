<template>
	<div class="search">
		<div>
			<form @submit.prevent="" action="">
				<div class="search__wrap">
					<img src="../assets/search.png" alt="">
					<input v-on:input="searchCollection($event)" placeholder="Search for photo" type="text">
				</div>
			</form>
			<p v-show="search.length > 0">Search Results for "{{search}}"</p>
		</div>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
	data(){
		return {
			search : ""
		}
	},
	methods:{
		...mapActions('imageModule',['getHomeImages']),

		searchCollection(e){
			if(e.target.value === ''){
				// this.getHomeImages("african")
				this.search = e.target.value
			}else{
				console.log(e.target.value)
				this.search = e.target.value
				this.getHomeImages(e.target.value) 
			}
			
			
		}
	},
	computed:{
		
	}
}
</script>

<style lang="scss" scoped>
	
	@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans&family=Ubuntu:wght@500&display=swap');

	.search{
		padding: 0px 300px 0px 300px;
		width: 100%;
		input{
			width: 100%;
			height: 100%;
			outline: none;
			border: none;
			padding-left: 20px;
			font-weight: 600;
			border-radius: 3px;
		}

		img{
			height: 16px;
		}

		p{
			font-family: 'Ubuntu', sans-serif;
			font-size: 13px;
			color: #2C3F5E;
			font-weight: 700;
			margin-top: 10px;
		}

		.search__wrap{
			display: flex;
			align-items: center;
			background: white;height: 50px;
			border: none;
			border-radius: 3px;
			padding-left: 20px;
			transition: 0.5s ease;
			box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		}
	}

	

	@media screen and (max-width:468px) {
		.search{
			padding: 0px 15px 0px 15px;
		}
	}

	@media screen and (min-width:468px) and (max-width:1024px) {
		.search{
			padding: 0px 20px 0px 20px;
		}
	}
</style>