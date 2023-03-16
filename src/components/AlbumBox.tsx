import { Link, useNavigate } from 'react-router-dom'
import { useReducer, useEffect } from 'react'
import req from './Requests'

type Props = {
    
    setPage : (linkItem : JSX.Element) => void    
}

export type ReducerState = {
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

const AlbumBox = ({ setPage } : Props) => {  
    
    const navigate = useNavigate()

    const [ state, dispatch ] = useReducer(reducer, initialState)

    const clickTo = (id : number) => {

    }   

    useEffect(() => {
        setPage(<Link id="Home" className='router-link' to="/">Home</Link>)
    },[])

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