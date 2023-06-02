import React from 'react'
import { Footer, NavBar } from './components'
import { BrowserRouter as Router, Route, Routes, Form, Link, NavLink } from 'react-router-dom'
import { ArtesaniasPage, CarritoPage} from './pages'
import { Productos1, Productos2, Productos3, Productos4, Productos5, Productos6, Productos7, Productos8 } from './components'



export const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArtesaniasPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/productos1" element={<Productos1 />} />  
          <Route path="/productos2" element={<Productos2 />} /> 
          <Route path="/productos3" element={<Productos3 />} /> 
          <Route path="/productos4" element={<Productos4 />} /> 
          <Route path="/productos5" element={<Productos5 />} />
          <Route path="/productos6" element={<Productos6 />} />  
          <Route path="/productos7" element={<Productos7 />} /> 
          <Route path="/productos8" element={<Productos8 />} />        
        </Routes>
      </Router>
    </div>
  )
}
