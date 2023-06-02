import React from 'react'
import { Footer, NavBar } from './components'
import { BrowserRouter as Router, Route, Routes, Form, Link, NavLink } from 'react-router-dom'
import { ArtesaniasPage, CarritoPage} from './pages'
import { Productos1, } from './components/Productos1'


export const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArtesaniasPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/productos1" element={<Productos1 />} />          
        </Routes>
      </Router>
    </div>
  )
}
