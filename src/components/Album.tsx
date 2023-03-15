import { useParams, Navigate, Link } from 'react-router-dom'

const Album = () => {

    const params = useParams()   

    return (
        <div>
            <h2>{params.slug}</h2>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Album