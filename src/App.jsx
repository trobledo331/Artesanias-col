import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import { Footer, NavBar } from './components'
import { ArtesaniasPage, CarritoPage } from './pages'

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
