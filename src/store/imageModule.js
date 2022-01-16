import api from '../api/api.js'

const imageModule = {
    namespaced : true,
    state(){
        return{
            homeImages : [],
            loading : false,
            modalPropsId : ""
        }
    },
    actions : {
        async getHomeImages({commit},collection){
            return new Promise((resolve,reject)=>{
                commit("fetchImagesRequest",true)
                api.getPictures(collection).then((res)=>{
                    console.log(res.data.results)
                    const result = res.data.results.slice(0,8);
                    resolve(res)
                    commit("fetchImagesSuccess",false)
                    commit("setImages",result)
                }).catch((err)=>{
                    reject(err)
                    commit("fetchImagesFailure",false)
                })
            })
        },
        setModalPropsId({commit},id){
            commit("setModalPropsId",id)
        }
    },
    mutations :{
        setImages(state,images){
            state.homeImages = images
        },
        fetchImagesRequest(state,payload){
            state.loading = payload
        },
        fetchImagesSuccess(state,payload){
            state.loading = payload
        },
        setModalPropsId(state,payload){
            state.modalPropsId = payload
        }
    },
}

export default imageModule;