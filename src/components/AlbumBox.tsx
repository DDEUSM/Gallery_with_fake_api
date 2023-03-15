import { Link, useNavigate } from 'react-router-dom'
import { useReducer } from 'react'
import req from './Requests'

type Props = {
    albumName : string
}

type ReducerState = {
    userId : number,
    id : number,
    title : string
}

type ReducerAction = {
    type_action : string
}

const initialState: ReducerState[] = await req.getAllAlbums()

const reducer = (state : ReducerState[], action : ReducerAction) => {
    switch(action.type_action){
        case "add":
            let newArray = [...state,{}]
            break
    }
    return state
}

const AlbumBox = ({ albumName } : Props) => {  
    
    const navigate = useNavigate()

    const [ state, dispatch ] = useReducer(reducer, initialState)

    const clickTo = (id : number) => {

    }   

    return (        
        <>
            {state.map((item, index) => {
            return (
                <Link key={index} className="album-box" to={"/album/" + item.id}>{item.title}</Link>
            )               
        })}
        </>                
    )
}

export default AlbumBox