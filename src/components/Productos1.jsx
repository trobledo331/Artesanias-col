import React from 'react'

import Bolso1 from './../assets/img/bolso-1.png'
import Bolso2 from './../assets/img/bolso-2.png'
import Bolso3 from './../assets/img/bolso-3.png'
import Bolso4 from './../assets/img/bolso-4.png'
import Bolso5 from './../assets/img/bolso-5.png'
import Bolso6 from './../assets/img/bolso-6.png'
import Bolso7 from './../assets/img/bolso-7.png'
import Bolso8 from './../assets/img/bolso-8.png'
import { Producto } from './Producto'

const Mochilas = [
    { id: 'mochilaUno', nombre: 'Mochila Wayuu', precio: '80.000' , imagen: Bolso1},
    { id: 'mochilaDos', nombre: 'Mochila Wayuu', precio: '70.000' , imagen: Bolso2},
    { id: 'mochilaTres', nombre: 'Mochila Wayuu', precio: '68.000' , imagen: Bolso3},
    { id: 'mochilaCuatro', nombre: 'Mochila Wayuu', precio: '75.000' , imagen: Bolso4},
    { id: 'mochilaCinco', nombre: 'Mochila Wayuu', precio: '90.000' , imagen: Bolso5},
    { id: 'mochilaSeis', nombre: 'Mochila Wayuu', precio: '110.000' , imagen: Bolso6},
    { id: 'mochilaSiete', nombre: 'Mochila Wayuu', precio: '100.000' , imagen: Bolso7},
    { id: 'mochilaOcho', nombre: 'Mochila Wayuu', precio: '85.000' , imagen: Bolso8},
]
export const Productos1 = ({ producto, agregarAlCarrito, quitarDelCarrito }) => {
    return (
        <div className='Productos1'>
            
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Mochilas</span>
                </h2>
            </div>
            <div className="row px-xl-5 pb-3">
                
                {
                    Mochilas.map( (mochila, index) => (
                        <Producto producto={ mochila } key={ index } />
                    ))
                }
                    
            </div>
        </div>
    );
}   
