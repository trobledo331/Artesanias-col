import React from 'react'
import { Footer, NavBar } from './components'
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom'
import { ArtesaniasPage, CarritoPage} from './pages'


export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArtesaniasPage />} />
          <Route path="/carrito" element={<CarritoPage />} />


        </Routes>

        <Footer />

        
      </Router>
    </>
  )
}
