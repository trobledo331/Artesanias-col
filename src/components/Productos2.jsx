import React from 'react'
import Collar1 from './../assets/img/Collar-1.png'
import Collar2 from './../assets/img/Collar-2.png'
import Collar3 from './../assets/img/Collar-3.png'
import Collar4 from './../assets/img/Collar-4.png'
import Collar5 from './../assets/img/Collar-5.png'
import Collar6 from './../assets/img/Collar-6.png'
import Collar7 from './../assets/img/Collar-7.png'
import Collar8 from './../assets/img/Collar-8.png'

const Collares = [ 
    { id: 'collarUno', nombre: 'Collar Embera Chamí', precio: '$100.000' , imagen: ''},
    { id: 'collarDos', nombre: 'Collar Embera Mo Do', precio: '$123.000', imagen: ''},
    { id: 'collarTres', nombre: 'Collar Arhuaco', precio: '$95.000', imagen: ''},
    { id: 'collarCuatro', nombre: 'Collar Wayuu<', precio: '$80.000', imagen: ''},
    { id: 'collarCinco', nombre: 'Collar Embera', precio: '$85.000', imagen: ''},
    { id: 'collarSeis', nombre: 'Collar Kuna', precio: '$92.000', imagen: ''},
    { id: 'collarSiete', nombre: 'Collar Zenú', precio: '$78.000', imagen: ''},
    { id: 'collarOcho', nombre: 'Collar Muisca', precio: '$110.000', imagen: ''},
]

export const Productos2 = ({ producto, agregarAlCarrito, quitarDelCarrito }) => {
        return (
            <div className="Productos-2">
                {/* <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p> */}
                <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                <button onClick={() => quitarDelCarrito(producto)}>Quitar del carrito</button>

            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Collares</span>
                </h2>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Collar1} alt="Collar 1" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Collar Embera Chamí</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$100.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$123.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <i className="btn btn-sm border"></i>
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => addToCart({ name: 'Collar Embera Chamí', price: 100000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Collar2} alt="Collar 2" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Collar Embera Mo Do</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$123.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$140.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <i className="btn btn-sm border"></i>
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => addToCart({ name: 'Collar Embera Mo Do', price: 123000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Collar3} alt="Collar 3" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Collar Arhuaco</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$95.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$110.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <i className="btn btn-sm border"></i>
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => addToCart({ name: 'Collar Arhuaco', price: 95000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Collar4} alt="Collar 4" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Collar Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$80.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$95.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <i className="btn btn-sm border"></i>
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => addToCart({ name: 'Collar Wayuu', price: 80000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Collar5} alt="Collar 5" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Collar Embera</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$85.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$100.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <i className="btn btn-sm border"></i>
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => addToCart({ name: 'Collar Embera', price: 85000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Collar6} alt="Collar 6" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Collar Kuna</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$92.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$105.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <i className="btn btn-sm border"></i>
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => addToCart({ name: 'Collar Kuna', price: 92000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Collar7} alt="Collar 7" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Collar Zenú</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$78.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$90.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <i className="btn btn-sm border"></i>
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => addToCart({ name: 'Collar Zenú', price: 78000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Collar8} alt="Collar 8" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Collar Muisca</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$110.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$130.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <i className="btn btn-sm border"></i>
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => addToCart({ name: 'Collar Muisca', price: 110000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};
