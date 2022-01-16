<template>
   <div class="wrapper">
      <div  class="wrapper__images">
         <div class="no__result" v-if="images.length === 0">No results found</div>
         <div v-else class="wrap" v-for="(image,index) in images"   :key="index">
            <div @click="openPhoto(image.id)">
               <img :src="image.cover_photo.urls.thumb" :alt="image.cover_photo.alt_description || 'image' ">
               <div class="name__location">
                  <p class="name">{{image.cover_photo.user.name}}</p>
                  <p class="location">{{image.cover_photo.user.location}}</p>
               </div>
            </div>    
         </div>
      </div>
   </div> 
</template>
 
<script>
import { mapState,mapActions } from 'vuex'

export default {
   data(){
      return{

      }
   },
   methods:{
      ...mapActions('toggleModule',['toggleModal']),
      ...mapActions('imageModule',['setModalPropsId']),
      openPhoto(id){
         this.setModalPropsId(id)
         this.toggleModal(true)
         
      }
   },
   computed:{
      ...mapState({
         images : (state) => state.imageModule.homeImages
      })
   }

   
}
</script>

<style lang="scss" scoped>

   @mixin center() {
      display: flex;
      justify-content: center;
      align-items: center;
   
   }

   .wrapper{
      @include center;
      
      .wrapper__images{
         width: 40%;
         display: grid;
         grid-template-columns: repeat(3,1fr);
         grid-template-rows: masonry; 
         justify-content: center;
         row-gap: 30px;
         column-gap: 30px;

         .no__result{
            width:100%;
            @include center();
            height: 200px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 16px;
            color: #6D7B91;
            font-weight: 700;
            margin-top: 5px;
         }
         

         .wrap{
            
            border-radius: 20px;
            z-index: 200;
            position: relative;
            transition: 0.2s ease;
            cursor: pointer;
            

            img{
               width: 100%;
               object-fit: contain;
               border-radius: 5px;
               filter: brightness(60%);
               z-index: 100;
               
            }

            img:hover{
               filter: brightness(40%);
               transition: 0.2s ease-in-out;
            }

            .name__location{
               margin-top: -40px;
               left: 10px;
               
               z-index: 900;
               position: absolute;

               .name{
                  font-size: 10px;
                  margin-bottom: 5px;
                  color: white;
                  font-weight: 600;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
               }

               .location{
                  font-size: 8px;
                  color: white;
                  font-family: sans-serif;
               }
            }
            
         }

         .wrap:hover{
            transform: scale(1.1);
         }     
      
         
      }
   }

   @media screen and (max-width:768px) {

      .wrapper{
         padding-left: 15px;
         padding-right: 15px;
         
         .wrapper__images{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: masonry; 
            justify-content: center;
            row-gap: 10px;
            column-gap: 10px;

            .wrap:hover{
               transform: scale(1);
            }
         }
      }
		
	}

   @media screen and (min-width:768px) and (max-width:1024px) {
      .wrapper{
         padding-left: 15px;
         padding-right: 15px;

         .wrapper__images{
            width: 80%;
         }
      }
   }


</style>