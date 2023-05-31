import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ArtesaniasPage, CarritoPage } from '../pages';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <ArtesaniasPage /> }/> 
            <Route path='/carrito' element={ <CarritoPage /> }/> 
        </Routes>  
    </>
  )
}
