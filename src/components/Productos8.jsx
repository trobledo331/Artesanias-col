import React from 'react'

import exclusivos1 from './../assets/img/exclusivos-1.png'
import exclusivos2 from './../assets/img/exclusivos-2.png'
import exclusivos3 from './../assets/img/exclusivos-3.png'
import exclusivos4 from './../assets/img/exclusivos-4.png'
import exclusivos5 from './../assets/img/exclusivos-5.png'
import exclusivos6 from './../assets/img/exclusivos-6.png'
import { Producto } from './Producto'

const ProductosExclusivos = [
    { id: 'exclusivos1', nombre: 'Cintas bordadas', precio: '65.000', imagen: exclusivos1 },
    { id: 'exclusivos2', nombre: 'Cuadros amazonía', precio: '67.000', imagen: exclusivos2 },
    { id: 'exclusivos3', nombre: 'Cuadros selva Los Katios', precio: '66.000', imagen: exclusivos3 },
    { id: 'exclusivos4', nombre: 'Cuadros Selva Yariguies', precio: '60.000', imagen: exclusivos4 },
    { id: 'exclusivos5', nombre: 'Cajonera de Joyería', precio: '64.000', imagen: exclusivos5 },
    { id: 'exclusivos6', nombre: 'Set decorativo tejido', precio: '65.000', imagen: exclusivos6 },
]
export const Productos8 = () => {
    return (
        
        <div className="Productos-8">
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Productos Exclusivos</span>
                </h2>
            </div>
            
            <div className="row px-xl-5 pb-3">
                
                {
                    ProductosExclusivos.map( (productosEx, index) => (
                        <Producto producto={ productosEx } key={ index } />
                    ))
                }
                    
            </div>
        </div>
    )
}