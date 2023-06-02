import React from 'react';
import Aretes1 from './../assets/img/Aretes-1.png';
import Aretes2 from './../assets/img/Aretes-2.png';
import Aretes3 from './../assets/img/Aretes-3.png';
import Aretes4 from './../assets/img/Aretes-4.png';
import Aretes5 from './../assets/img/Aretes-5.png';
import Aretes6 from './../assets/img/Aretes-6.png';
import Aretes7 from './../assets/img/Aretes-7.png';
import Aretes8 from './../assets/img/Aretes-8.png';
import { Producto } from './Producto';

const Collares = [
    { id: "aretesUno", nombre: "Aretes Embera Chamí", precio: "$32.000", imagen: Aretes1 },
    { id: "aretesDos", nombre: "Aretes Cuero con Borlas", precio: "$28.000", imagen: Aretes2 },
    { id: "aretesTres", nombre: "Aretes Círculo Plateado", precio: "$20.000", imagen: Aretes3 },
    { id: "aretesCuatro", nombre: "Aretes Piedra Rosada<", precio: "$25.000", imagen: Aretes4 },
    { id: "aretesCinco", nombre: "Aretes Geométricos", precio: "$18.000", imagen: Aretes5 },
    { id: "aretesSeis", nombre: "Aretes Florales", precio: "$22.000", imagen: Aretes6 },
    { id: "aretesSiete", nombre: "Aretes con Dije", precio: "$26.000", imagen: Aretes7 },
    { id: "aretesOcho", nombre: "Aretes con Perlas", precio: "$24.000", imagen: Aretes8 },
]; 

export const Productos3 = ({ producto, agregarAlCarrito, quitarDelCarrito }) => {
    return (
        <div className="Productos-3">
            
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Aretes</span>
                </h2>
            </div>
            <div className="row px-xl-5 pb-3">

                {
                    Collares.map( (collares, index) => (
                        <Producto producto={ collares} key={ index } />
                    ))
                }
                
            </div>
        </div>

    );
};
