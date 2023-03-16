import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import c from './components/AllComponents'


const App = () => {
  
  const [routerSequence, setNewRouter] = useState<JSX.Element[]>([])
  const navigate = useNavigate()
  const [ returnAuth, setReturnAuth ] = useState<boolean>()

  const setNewPage = (linkItem : JSX.Element) => {
    const ifContains = routerSequence.filter(( item ) => {
      return item.props.id === linkItem.props.id
    })
    if(ifContains.length > 0){
      console.log('contem')
    }else{
      setNewRouter([ linkItem ])
    }    
  }

  useEffect(() => {
    setReturnAuth(false)
  },[routerSequence])
  
  return (
    <div>
      <c.Header/>
      <div className="router-sequence">
        {routerSequence.map((item, index) => {
          return (
            <div key={index}>
              {item}/
            </div>
          )
        })}
      </div>
      
      <main className="view-albums">
        <Routes>
          <Route path="/" element={<c.AlbumBox setPage={setNewPage}/>} />
          <Route path="/album/:id" element={<c.Album setPage={setNewPage}/>} />
          <Route path="/photo/:id" element={<c.Photo/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App