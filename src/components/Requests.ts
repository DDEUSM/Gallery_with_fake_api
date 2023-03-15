import axios from 'axios'

const http = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})

export default {
    getAllAlbums : async() => {
        const response = await http.get("/albums")
        return response.data
    },
    getAllImages : async() => {
        const response = await http.get("/photos")
        return response.data
    }
}