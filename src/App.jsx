import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Single from './pages/Single'

function App () {
  return (
    <>
      <Navbar />

      <div className='bg-zinc-100  scroll-smooth'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/article/:keyword' element={<Single />} />
          <Route path='/404' element={<NotFound />} />

          <Route path='/*' element={<Navigate to='/404' />} />
        </Routes>
      </div>
    </>
  )
}

export default App
