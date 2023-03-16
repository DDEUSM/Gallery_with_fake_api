import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import req from './Requests'
import { ReducerStatePhoto } from './Album'

const Photo = () => {

    const params = useParams()
    const [ image, setImage ] = useState<ReducerStatePhoto>()
    const navigate = useNavigate()
    const getImage = async() => {
        let img
        if(params.id){
            img = await req.getOneImage(params.id) 
        }
        setImage(img)
    }

    const returnPage = () => {
        navigate(-1)
    }

    useEffect(() => {
       getImage()
    },[])

    return (
        <div>
            <button onClick={returnPage}>Voltar</button>
            <h2>{image?.title}</h2>
            <img src={image?.url} alt="image of album" />
        </div>
    )
}

export default Photo