import axios from 'axios';


const memeApi = axios.create({
    baseURL:'/api'
})

export default memeApi;