<template>
   <div class="wrapper">
      <div class="wrapper__inside">
         <div class="no__result" v-if="images.length === 0">No results found</div> 
         <div class="cover" v-else v-for="(image,index) in images" :key="index">     
            <div @click="openPhoto(image.id)">
               <img :src="image.cover_photo.urls.thumb" alt="">
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
         images : (state) => state.imageModule.homeImages,
         err : (state) => state.imageModule.err
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

   @mixin gen {
      display:block;
      overflow: hidden;
      margin-bottom: 20px;
      margin-right: 10px
   }

   .wrapper{
      @include center();
      
      .wrapper__inside{
         // height: 200px;
         width: 40%;
         position: relative;
         column-count: 3;

         .no__result{
        
            width: 100%;
            // @include center();
            height: 200px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 16px;
            color: #6D7B91;
            font-weight: 700;
            margin-top: 5px;
            
         }
         

         .cover{
     
            border-radius: 5px;
            @include gen;
            position: relative;
            cursor: pointer;
            transition: 0.2s ease-in-out;

            img{
               border-radius: 5px;
               width: 100%;
               object-fit: contain;
               border-radius: 5px;
               filter: brightness(80%);
               z-index: 100;
               transition: 0.2s ease-in-out;
               
            }
            img:hover{
               filter: brightness(60%);
               
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
         .cover:hover{
            transform: scale(1.1);
            
         } 
         
      }
      

   }



   @media screen and (max-width:768px) {

      .wrapper{
         padding-left: 15px;
         padding-right: 15px;

         .wrapper__inside{
            width: 100%;
            column-count: 2;
            .cover:hover{
               transform: scale(1);
            }  
         }
         
      }
		
	}

   @media screen and (min-width:768px) and (max-width:1024px) {
      .wrapper{
         padding-left: 15px;
         padding-right: 15px;

         .wrapper__inside{
            width: 80%;
            column-count: 3;
         }
      }
   }


</style>