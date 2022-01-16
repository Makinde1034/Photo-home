<template>
	<div>
		<div :class=" isModalOpen ? [ 'overlay', 'overlay__active' ] : 'overlay' " @click="closeModal"><img class="close" src="../assets/close.png" alt=""></div>
		<div :class=" isModalOpen ? [ 'modal', 'modal__active' ] : 'modal' ">
			<div v-for="(image,index) in allImages" :key="index" >
				<div v-if="image.id === imageId">
					<div class="image">
						<img class="img1" :src="image.cover_photo.urls.regular" alt="modal--image">
					</div>
					<div class="details">
						<p class="details__name">{{image.cover_photo.user.name}}</p>
						<p class="details__location">{{image.cover_photo.user.location}}</p>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>

import { mapState,mapActions } from 'vuex'

export default {
	methods:{
		...mapActions('toggleModule',['toggleModal']),
		closeModal(){
			this.toggleModal(false);
		}
	},
	computed:{
		...mapState({
			isModalOpen : (state) => state.toggleModule.isModalOpen,
			imageId : (state) => state.imageModule.modalPropsId,
			allImages : (state) => state.imageModule.homeImages
		})
	}
}
</script>


<style lang="scss">
.overlay{
	height: 100%;
	width: 100%;
	background: rgba(10, 10, 10, 0.7);
	position: fixed;
	top: 0px;
	visibility:  hidden;
	opacity: 0;
	transition: 0.5s ease;
	z-index:999;
	
	.close{
		height: 20px;
		position: absolute;
		top: 50px;
		right: 50px;
		cursor: pointer;
	}
}

.overlay__active{
	visibility: visible;
	opacity: 1;
}

.modal{
	height: 500px;
	width: 50%;
	background: white;
	transform: translate(-50%,-50%) scale(0.8);
	position: fixed;
	left: 50%;
	top: 50%;
	z-index: 1000;
	visibility:  hidden;
	opacity: 0;
	transition: 0.3s ease;
	border-radius: 5px;

	.image{
		height: 400px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: black;

		.img1{
			height: 100%;
			width: 100%;
			object-fit: cover;
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
			// object-position: center;
		}
	}

	

	.details{
		height: 100px;
		padding-left: 30px;
		padding-top:20px;

		.details__name{
			font-weight: 700;
			margin-bottom: 5px;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}

		.details__location{
			font-size: 12px;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
	}
}

.modal__active{
	visibility: visible;
	opacity: 1;
	transform: translate(-50%,-50%) scale(1);
}

@media screen and (max-width:468px) {
	.overlay{
		.close{
			height: 16px;
		}
	}
	.modal{
		width: calc(100vw - 30px);
		height: 400px;

		.image{
			height: 300px;
		}

		.details{
			height: 50px;
		}
	}
}
</style>