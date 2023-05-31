import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ArtesaniasPage, CarritoPage } from '../pages';
import { Ayuda, AyudaPage } from '../pages/AyudaPage';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <ArtesaniasPage /> }/> 
            <Route path='/carrito' element={ <CarritoPage /> }/> 
            <Route path='/ayuda' element={ < AyudaPage/> }/> 
        </Routes>  
    </>
  )
}
