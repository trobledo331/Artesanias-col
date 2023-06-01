import React from 'react'
import { Categorias, Footer, NavBar, Politicas, Productos1 } from './components'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'


export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
