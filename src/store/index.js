
import {createStore} from 'vuex'
import imageModule from './imageModule'
import toggleModule from './toggleModule'

const store = createStore({
    modules:{
        imageModule,
        toggleModule
    }
})

export default store