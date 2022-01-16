<template>
	<div class="wrapper">
		<div class="wrapper__banner">
			<SearchBar />
		</div>
		<div class="wrapper__images">
			<Loading  v-if="loading === true"/> 
			<LandingImages  v-else />	
		</div>
		<Modal />
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import SearchBar from '../components/searchBar.vue'
import LandingImages from '../components/landingImages.vue'
import Loading from '../components/loading.vue'
import Modal from '../components/modal.vue'

export default {
	components:{
		SearchBar,
		LandingImages,
		Loading,
		Modal
	},
	methods:{
		...mapActions('imageModule',['getHomeImages'])
	},
	computed:{
		...mapState({
			loading : (state) => state.imageModule.loading
		})
	},
	mounted(){
		this.getHomeImages();
	}
}

</script>

<style lang="scss" scoped>

$banner_color : #DDE2E9;

@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper{
	width: 100%;
	
	.wrapper__banner{
		
		background-color: $banner_color;
		height: 200px;
		width: 100%;
		@include center;
	}

	.wrapper__images{
		@include center;
		margin-top: -30px;
		
	}

}

</style>