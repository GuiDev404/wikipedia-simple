import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Single from './pages/Single'

function App () {
  return (
    <>
      <div className='scroll-smooth'>
        <Routes>
          <Route element={<Dashboard />}>
            <Route path='/' element={<Home />} />
            <Route path='/article/:keyword' element={<Single />} />
          </Route>

          <Route path='/404' element={<NotFound />} />
          <Route path='/*' element={<Navigate to='/404' />} />
        </Routes>
      </div>
    </>
  )
}

export default App
