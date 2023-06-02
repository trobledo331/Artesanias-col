import React from 'react'
import Mascara1 from './../assets/img/Mascara-1.png'
import Exclusivo1 from './../assets/img/Exclusivos-1.png'

export const Ofertas = () => {
    return (
        <div className="ofertas">
            <div className="row px-xl-5">
                <div className="col-md-6 pb-4">
                    <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                        <div className="OfertaFondo1"/>
                        <div className="position-relative">
                            <h5 className="text-uppercase text-primary mb-3">20% de descuento en todas las máscaras</h5>
                            <h1 className="mb-4 font-weight-semi-bold">Colecciones Regionales</h1>
                            <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Tienda</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pb-4">
                    <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                        <div className="OfertaFondo2"/>
                        <div className="position-relative">
                            <h5 className="text-uppercase text-primary mb-3">30% de Descuento </h5>
                            <h1 className="mb-4 font-weight-semi-bold">Productos Exclusivos</h1>
                            <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Tienda</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
