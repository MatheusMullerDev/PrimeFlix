import axios from 'axios'

// base da API https://api.themoviedb.org/3/
// url da API /movie/now_playing?api_key=4721ffb021b06140dae5343108aef3d3


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api