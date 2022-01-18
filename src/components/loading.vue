<template>
	<div class="wrapper">
		<div  class="wrapper__images">
			<div class="row1">
				<div class="row1__box1">
					<LoadingAnimation />
				</div>
				<div class="row1__box2">
					<LoadingAnimation />
				</div>
				<div class="row1__box2">
					<LoadingAnimation />
				</div>
			</div>
			<div class="row2">
				<div class="row2__box1">
					<LoadingAnimation />
				</div>
				<div class="row2__box2">
					<LoadingAnimation />
				</div>
			</div>
			<div class="row3">
				<div class="row3__box1">
					<LoadingAnimation />
				</div>
				<div class="row3__box2">
					<LoadingAnimation />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import LoadingAnimation from './loadingAnimation.vue'

export default {
	components:{
		LoadingAnimation
	}
}
</script>

<style lang="scss" scoped>

	$box-color : #F5F5F5;

	@mixin center() {
		display: flex;
		justify-content: center;
		align-items: center;
	
	}
	
	@mixin boxProps {
		width: 100%;
		background: $box-color;
		margin-bottom: 30px;
		position: relative;
		padding-left: 10px;
		border-radius: 5px;
	}

	.wrapper{
		@include center;
	
		.wrapper__images{
			display: flex;

			.row1{
				width: 200px;
				
				.row1__box1{
					@include boxProps();
					height: 200px;
					
				}

				.row1__box2{
					@include boxProps();
					height: 200px;
				}
			}

			.row2{
				width: 200px;
				margin-right: 30px;
				margin-left: 30px;
				.row2__box1{
					@include boxProps();
					height: 250px;
				}

				.row2__box2{
					@include boxProps();
					height: 200px;
				
				}
			}

			.row3{
				width: 200px;
				.row3__box1{
					@include boxProps();
					height: 200px;
					
				}

				.row3__box2{
					@include boxProps();
					height: 270px;
					
				}
			}
			
		}

		
	}

	@media screen and (max-width:320px) {
		.wrapper{
			
			.wrapper__images{
				padding: 0px 15px 0px 15px;
				.row1, .row2{
					max-width: 140px;
				}

				.row1{
					margin-right: 10px;
				}

				.row2{
					margin-right: 0px;
					margin-left: 0px;
					margin-left: 10px;
				}

				.row3{
					display: none;
					
				}
			}
			
		}
	
	}

	@media screen and (min-width:320px) and (max-width:468px) {
		.wrapper{
			
			.wrapper__images{
				padding: 0px 15px 0px 15px;
				.row1, .row2{
					max-width: 160px;
				}

				.row1{
					margin-right: 10px;
				}

				.row2{
					margin-right: 0px;
					margin-left: 0px;
					margin-left: 10px;
				}

				.row3{
					display: none;
					
				}
			}
			
		}
	
	}


</style>