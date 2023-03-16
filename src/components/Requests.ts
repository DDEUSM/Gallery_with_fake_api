import axios from 'axios'

const http = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})

export default {
    getAllAlbums : async() => {
        const response = await http.get("/albums")
        return response.data
    },
    getOneAlbum : async(id : string) => {
        const response = await http.get(`/albums/${id}`)
        return response.data
    },
    getImagesOfAlbum : async(id : string) => {
        const response = await http.get(`/photos?albumId=${id}`)
        return response.data
    },
    getOneImage : async(id : string) => {
        const response = await http.get(`/photos/${id}`)
        return response.data
    }
    
}