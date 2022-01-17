import api from '../api/api.js'

const imageModule = {
    namespaced : true,
    state(){
        return{
            homeImages : [],
            loading : false,
            modalPropsId : "",
            err : {
                errMsg : "",
                _err : null
            }
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
                    console.log(err.response)
                    const payload={
                        loading : false,
                        errMsg : err.response.data
                    }
                    commit("fetchImagesFailure",payload)
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
        fetchImagesFailure(state,payload){
            state.loading = payload.loading
            state.err.errMsg = payload.errMsg
            state.err._err = true
        
        },
        setModalPropsId(state,payload){
            state.modalPropsId = payload
        }
    },
}

export default imageModule;