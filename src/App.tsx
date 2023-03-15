import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import c from './components/AllComponents'

type RouterLink = {
  router : React.RefAttributes<HTMLAnchorElement>
}

const App = () => {
  
  const [routerSequence, setNewRouter] = useState<RouterLink[]>([])

  return (
    <div>
      <c.Header/>
      <main className="view-albums">
        <Routes>
          <Route path="/" element={<c.AlbumBox albumName=''/>} />
          <Route path='/album/:slug' element={<c.Album/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App