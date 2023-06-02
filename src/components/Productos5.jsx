import React from 'react';

import Mascara1 from './../assets/img/Mascara-1.png';
import Mascara2 from './../assets/img/Mascara-2.png';
import Mascara3 from './../assets/img/Mascara-3.png';
import Mascara4 from './../assets/img/Mascara-4.png';
import Mascara5 from './../assets/img/Mascara-5.png';
import Mascara6 from './../assets/img/Mascara-6.png';
import Mascara7 from './../assets/img/Mascara-7.png';
import Mascara8 from './../assets/img/Mascara-8.png';
import Mascara9 from './../assets/img/mascara-9.png';
import { Producto } from './Producto'

const Mascaras = [
    { id: 'Mascara1', nombre: 'Mascara Embera Chamí', precio: '39.000' , imagen: Mascara1 },
    { id: 'Mascara2', nombre: 'Mascara Wayuu', precio: '49.000' , imagen: Mascara2 },
    { id: 'Mascara3', nombre: 'Mascara Wayuu Alegre', precio: '49.000' , imagen: Mascara3 },
    { id: 'Mascara4', nombre: 'Mascara Kankuama', precio: '39.000' , imagen: Mascara4 },
    { id: 'Mascara5', nombre: 'Mascara Tikuna', precio: '39.000' , imagen: Mascara5 },
    { id: 'Mascara6', nombre: 'Mascara Arhuaca', precio: '59.000' , imagen: Mascara6 },
    { id: 'Mascara7', nombre: 'Mascara Nasa', precio: '39.000' , imagen: Mascara7 },
    { id: 'Mascara8', nombre: 'Mascara Yukpa', precio: '39.000' , imagen: Mascara8 },
    { id: 'Mascara9', nombre: 'Mascara Zenú', precio: '39.000' , imagen: Mascara9 },
]
export const Productos5 = () => {
    
    return (
        <div className="Productos-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Mascaras</span>
                </h2>
            </div>
            <div className="row px-xl-5 pb-3">

                {
                    Mascaras.map( (mascara, index) => (
                        <Producto producto={ mascara } key={ index } />
                    ))
                }

            </div>
        </div>
    );
}