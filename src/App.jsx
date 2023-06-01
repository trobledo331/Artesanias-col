import React from 'react'
import { Footer, NavBar } from './components'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArtesaniasPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
      </Router>
    </div>
  )
}
