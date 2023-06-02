import React from 'react'

import Ceramica1 from './../assets/img/Ceramica-1.png'
import Ceramica2 from './../assets/img/Ceramica-2.png'
import Ceramica3 from './../assets/img/Ceramica-3.png'
import Ceramica4 from './../assets/img/Ceramica-4.png'
import Ceramica5 from './../assets/img/Ceramica-5.png'
import Ceramica6 from './../assets/img/Ceramica-6.png'
import Ceramica7 from './../assets/img/Ceramica-7.png'
import Ceramica8 from './../assets/img/Ceramica-8.png'
import Ceramica9 from './../assets/img/Ceramica-9.png'
import { Producto } from './Producto'

const Ceramicas = [
    { id: 'ceramica1', nombre: 'Jarrones con patas', precio: '50.000' , imagen: Ceramica1 },
    { id: 'ceramica2', nombre: 'Vasijas con tapa', precio: '52.000' , imagen: Ceramica2 },
    { id: 'ceramica3', nombre: 'Jarrones boca grande', precio: '52.000' , imagen: Ceramica3 },
    { id: 'ceramica4', nombre: 'Tetera y posillo zoomórfico', precio: '55.000' , imagen: Ceramica4 },
    { id: 'ceramica5', nombre: 'Vasijas zoomórficas', precio: '49.000' , imagen: Ceramica5 },
    { id: 'ceramica6', nombre: 'Juego de vasijas con agarradera', precio: '56.000' , imagen: Ceramica6 },
    { id: 'ceramica7', nombre: 'Vasija con tapa', precio: '51.000' , imagen: Ceramica7 },
    { id: 'ceramica8', nombre: 'Juego de vasijas con tapa', precio: '53.000' , imagen: Ceramica8 },
    { id: 'ceramica9', nombre: 'Teteras de barro', precio: '55.000' , imagen: Ceramica9 },
]

export const Productos6 = () => {

    return (
        <div className="Productos-6">
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Cerámica</span>
                </h2>
            </div>
            <div className="row px-xl-5 pb-3">
                {
                    Ceramicas.map( (ceramica, index) => (
                        <Producto producto={ ceramica } key={ index } />
                    ))
                }
                    
            </div>
        </div>
        
    )
}