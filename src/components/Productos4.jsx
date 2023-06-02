import React from 'react'

import Manilla1 from './../assets/img/Manilla-1.png'
import Manilla2 from './../assets/img/Manilla-2.png'
import Manilla3 from './../assets/img/Manilla-3.png'
import Manilla4 from './../assets/img/Manilla-4.png'
import Manilla5 from './../assets/img/Manilla-5.png'
import Manilla6 from './../assets/img/Manilla-6.png'
import Manilla7 from './../assets/img/Manilla-7.png'
import Manilla8 from './../assets/img/Manilla-8.png'
import Manilla9 from './../assets/img/Manilla-9.png'
import { Producto } from './Producto'

const Manillas = [
    { id: 'Manilla1', nombre: 'Manilla Embera Chamí', precio: '22.000' , imagen: Manilla1 },
    { id: 'Manilla2', nombre: 'Manilla Embera Mo Do', precio: '25.000' , imagen: Manilla2 },
    { id: 'Manilla3', nombre: 'Manilla Embera Umada', precio: '23.000' , imagen: Manilla3 },
    { id: 'Manilla4', nombre: 'Manilla Embera Ambuara', precio: '26.000' , imagen: Manilla4 },
    { id: 'Manilla5', nombre: 'Manilla Embera Dama Boro', precio: '26.000' , imagen: Manilla5 },
    { id: 'Manilla6', nombre: 'Manilla Embera Awera', precio: '24.000' , imagen: Manilla6 },
    { id: 'Manilla7', nombre: 'Manilla Embera Ea De', precio: '28.000' , imagen: Manilla7 },
    { id: 'Manilla8', nombre: 'Manilla Embera Beda Dru', precio: '25.000' , imagen: Manilla8 },
    { id: 'Manilla9', nombre: 'Manilla Emberá Katío', precio: '21.000' , imagen: Manilla9 },
]
export const Productos4 = () => {
    
    return (

        <div className="Productos-4">
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Manillas</span>
                </h2>
            </div>
            <div className="row px-xl-5 pb-3">
                
                {
                    Manillas.map( (manilla, index) => (
                        <Producto producto={ manilla } key={ index } />
                    ))
                }
                    
            </div>
        </div>
    )
}