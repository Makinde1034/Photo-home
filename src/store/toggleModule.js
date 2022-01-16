const toggle = {
	namespaced : true,
	state(){
		return{
			isModalOpen : false
		}
	},
	actions:{
		toggleModal({commit},payload){
			commit("toggleModal",payload)
		}
	},
	mutations:{
		toggleModal(state,payload){
			state.isModalOpen = payload
		}
	}
}

export default toggle