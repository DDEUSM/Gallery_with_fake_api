import { useEffect, useReducer, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import req from './Requests'

type Props = {
    setPage : ( linkItem : JSX.Element ) => void,    
}

type ReducerAction = {
    type_action : string
    payLoad? : {
        arrObj : ReducerStatePhoto[]
    }
}

export type ReducerStatePhoto = {
    albumId : number,
    id : number,
    title : string,
    url : string,
    thumbnailUrl : string
}

const initialState : any = []

const reducer = (state : ReducerStatePhoto[] , action : ReducerAction) => {
    switch(action.type_action){
        case "add":
            if(action.payLoad?.arrObj){
                let newarr =  action.payLoad?.arrObj
                state = newarr
            }
            break
    }
    return state
}

const Album = ({ setPage } : Props) => {

    const params = useParams()    
    const [ titleAlbum, setTitleAlbum ] = useState('') 
    const [ photos, dispatch ] = useReducer(reducer, initialState)
    const navigate = useNavigate()
    
    async function printPhotos(){
        let newArr
        let newTitle : any
        if(params.id){
            newArr = await req.getImagesOfAlbum(params.id)
            newTitle = await req.getOneAlbum(params.id)
        }
        dispatch({type_action : "add", payLoad : { arrObj : newArr }})
        setTitleAlbum(newTitle.title)
    }

    const returnPage = () => {
        navigate(-1)
    }

    useEffect(() => {
        setPage(<Link className="router-link" id={'album' + params.id} to={'/album/' + params.id}>album{params.id}</Link>)
        printPhotos()        
    },[])

    return (
        <div>
            <button onClick={returnPage}>Voltar</button>
            <h2>{ titleAlbum }</h2>
            <div className="photos-gallery">
                {photos.map(( item, index) => {
                    return (
                        <Link key={index} to={`/photo/${item.id}`}><img src={item.url} alt="Photo thumbnail" width={300} /></Link>
                    )
            })}
            </div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Album