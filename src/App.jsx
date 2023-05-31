import React from 'react'
import { Footer, NavBar } from './components'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import Logo from './assets/img/Logo/logo.png'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
