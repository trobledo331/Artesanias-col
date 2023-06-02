import React from 'react'

import cucharas1 from './../assets/img/cucharas-1.png'
import cucharas2 from './../assets/img/cucharas-2.png'
import cucharas3 from './../assets/img/cucharas-3.png'
import cucharas4 from './../assets/img/cucharas-4.png'
import platos1 from './../assets/img/platos-1.png'
import platos2 from './../assets/img/platos-2.png'
import platos3 from './../assets/img/platos-3.png'
import platos4 from './../assets/img/platos-4.png'
import { Producto } from './Producto'

const ProductosUtensilios = [
    { id: 'cucharas1', nombre: 'Cucharas de madera', precio: '27.000' , imagen: cucharas1 },
    { id: 'cucharas2', nombre: 'Cucharas de madera', precio: '25.000' , imagen: cucharas2 },
    { id: 'cucharas3', nombre: 'Cucharas de madera', precio: '28.000' , imagen: cucharas3 },
    { id: 'cucharas4', nombre: 'Cucharas de madera', precio: '23.000' , imagen: cucharas4 },
    { id: 'platos1', nombre: 'Plato pez de madera', precio: '22.000' , imagen: platos1 },
    { id: 'platos2', nombre: 'Plato Tortuga', precio: '25.000' , imagen: platos2 },
    { id: 'platos3', nombre: 'Vajilla lunares rojos', precio: '26.000' , imagen: platos3 },
    { id: 'platos4', nombre: 'Platos constelaciones', precio: '29.000' , imagen: platos4 },
]

export const Productos7 = () => {

    return (
        
        <div className="Productos-7">
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Productos de Utensilios</span>
                </h2>
            </div>
            <div className="row px-xl-5 pb-3">
                
                {
                    ProductosUtensilios.map( (utensilio, index) => (
                        <Producto producto={ utensilio } key={ index } />
                    ))
                }
                    
            </div>
        </div>
        
    )
}
