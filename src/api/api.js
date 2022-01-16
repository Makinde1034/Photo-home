import axios from 'axios'
// const CLEINT_ID = process.env.VUE_APP_CLEINT_ID
const BASE_URL = process.env.VUE_APP_BASE_URL


export default {
    getPictures(collection="african"){
        return axios.get(`${BASE_URL}/search/collections?client_id=ZXaM2mCLBFXR3X1Cf-PjYSTijKgYGl2LHVlztgdVT70&query=${collection}&page=73`)
    }
}