import React from "react";
import Collar1 from "./../assets/img/Collar-1.png";
import Collar2 from "./../assets/img/Collar-2.png";
import Collar3 from "./../assets/img/Collar-3.png";
import Collar4 from "./../assets/img/Collar-4.png";
import Collar5 from "./../assets/img/Collar-5.png";
import Collar6 from "./../assets/img/Collar-6.png";
import Collar7 from "./../assets/img/Collar-7.png";
import Collar8 from "./../assets/img/Collar-8.png";
import { Producto } from "./Producto";

const Collares = [
{ id: "collarUno", nombre: "Collar Embera Chamí", precio: "$100.000", imagen: Collar1 },
{ id: "collarDos", nombre: "Collar Embera Mo Do", precio: "$123.000", imagen: Collar2 },
{ id: "collarTres", nombre: "Collar Arhuaco", precio: "$95.000", imagen: Collar3 },
{ id: "collarCuatro", nombre: "Collar Wayuu<", precio: "$80.000", imagen: Collar4 },
{ id: "collarCinco", nombre: "Collar Embera", precio: "$85.000", imagen: Collar5 },
{ id: "collarSeis", nombre: "Collar Kuna", precio: "$92.000", imagen: Collar6 },
{ id: "collarSiete", nombre: "Collar Zenú", precio: "$78.000", imagen: Collar7 },
{ id: "collarOcho", nombre: "Collar Muisca", precio: "$110.000", imagen: Collar8 },
];

export const Productos2 = () => {
  return (
    <div className="Productos-2">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Collares</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {
            Collares.map((mochila, index) => (
                <Producto producto={mochila} key={index} />
            ))
        }
      </div>
    </div>
  );
};
