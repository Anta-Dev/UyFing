import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Login } from './pages/Auth/Login'
import { Probando } from './pages/Probando'
import { PrivateRouter } from './routes/PrivateRouter'
import { PublicRouter } from './routes/PublicRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route exact path="/login" element={
        <PublicRouter>
          <Login/>
        </PublicRouter>
      }/>
      <Route exact path="/register" element={
        <PublicRouter>
          <Login/>
        </PublicRouter>
      }/>
      <Route exact path="/private" element={
        <PrivateRouter>
          <Probando/>
        </PrivateRouter>
      }/>
      <Route exact path="/private-2" element={
        <PrivateRouter>
          <Probando/>
        </PrivateRouter>
      }/>
    </Routes>
  )
}

export default App
