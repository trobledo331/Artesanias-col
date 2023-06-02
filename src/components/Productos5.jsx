import React from 'react';
import { Link } from 'react-router-dom';
import Mascara1 from './../assets/img/Mascara-1.png';
import Mascara2 from './../assets/img/Mascara-2.png';
import Mascara3 from './../assets/img/Mascara-3.png';
import Mascara4 from './../assets/img/Mascara-4.png';
import Mascara5 from './../assets/img/Mascara-5.png';
import Mascara6 from './../assets/img/Mascara-6.png';
import Mascara7 from './../assets/img/Mascara-7.png';
import Mascara8 from './../assets/img/Mascara-8.png';
import Mascara9 from './../assets/img/mascara-9.png';
import { Footer } from './Footer';

export const Productos5 = ({ producto, agregarAlCarrito, quitarDelCarrito }) => {
    return (
        <div>
            {/* <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p> */}
            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
            <button onClick={() => quitarDelCarrito(producto)}>Quitar del carrito</button>
        </div>
    );

    return (
        <div className="Productos-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Mascaras</span></h2>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Mascara1} alt="Mascara 1" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mascara Embera Chamí</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$39.000</h6><h6 className="text-muted ml-2"><del>$57.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Mascara Embera Chamí', precio: 57000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Mascara2} alt="Mascara 2" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mascara Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$49.000</h6><h6 className="text-muted ml-2"><del>$67.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Mascara Wayuu', precio: 67000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Mascara3} alt="Mascara 3" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mascara Wayuu Alegre</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$49.000</h6><h6 className="text-muted ml-2"><del>$67.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Mascara Wayuu Alegre', precio: 67000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Mascara4} alt="Mascara 4" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mascara Kankuama</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$39.000</h6><h6 className="text-muted ml-2"><del>$57.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Mascara Kankuama', precio: 57000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Mascara5} alt="Mascara 5" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mascara Tikuna</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$39.000</h6><h6 className="text-muted ml-2"><del>$57.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Mascara Tikuna', precio: 57000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Mascara6} alt="Mascara 6" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mascara Arhuaca</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$59.000</h6><h6 className="text-muted ml-2"><del>$77.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Mascara Arhuaca', precio: 77000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Mascara7} alt="Mascara 7" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mascara Nasa</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$39.000</h6><h6 className="text-muted ml-2"><del>$57.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Mascara Nasa', precio: 57000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Mascara8} alt="Mascara 8" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mascara Yukpa</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$39.000</h6><h6 className="text-muted ml-2"><del>$57.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Mascara Yukpa', precio: 57000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Mascara9} alt="Mascara 9" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mascara Zenú</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$39.000</h6><h6 className="text-muted ml-2"><del>$57.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Mascara Zenú', precio: 57000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Productos5;
