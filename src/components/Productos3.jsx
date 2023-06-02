import React from 'react';
import { Link } from 'react-router-dom';
import Aretes1 from './../assets/img/Aretes-1.png';
import Aretes2 from './../assets/img/Aretes-2.png';
import Aretes3 from './../assets/img/Aretes-3.png';
import Aretes4 from './../assets/img/Aretes-4.png';
import Aretes5 from './../assets/img/Aretes-5.png';
import Aretes6 from './../assets/img/Aretes-6.png';
import Aretes7 from './../assets/img/Aretes-7.png';
import Aretes8 from './../assets/img/Aretes-8.png';

export const Productos3 = ({ producto, agregarAlCarrito, quitarDelCarrito }) => {
    return (
        <div>
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
            <button onClick={() => quitarDelCarrito(producto)}>Quitar del carrito</button>
        </div>
    );

    return (
        <div className="Productos-3">
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Areteses</span>
                </h2>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Aretes1} alt="Aretes 1" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Aretes Embera Chamí</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$32.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$35.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm border">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Aretes Embera Chamí', precio: 35000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Aretes2} alt="Aretes 2" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Aretes Cuero con Borlas</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$28.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$30.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm border">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Aretes Cuero con Borlas', precio: 30000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Aretes3} alt="Aretes 3" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Aretes Círculo Plateado</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$20.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$22.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm border">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Aretes Círculo Plateado', precio: 22000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Aretes4} alt="Aretes 4" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Aretes Piedra Rosada</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$25.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$28.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm border">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Aretes Piedra Rosada', precio: 28000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Aretes5} alt="Aretes 5" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Aretes Geométricos</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$18.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$20.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm border">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Aretes Geométricos', precio: 20000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Aretes6} alt="Aretes 6" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Aretes Florales</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$22.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$25.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm border">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Aretes Florales', precio: 25000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Aretes7} alt="Aretes 7" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Aretes con Dije</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$26.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$28.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm border">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Aretes con Dije', precio: 28000 })}
                            >
                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Aretes8} alt="Aretes 8" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Aretes con Perlas</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$24.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$26.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to="/carrito" className="btn btn-sm border">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </Link>
                            <button
                                className="btn btn-sm text-dark p-0"
                                onClick={() => agregarAlCarrito({ nombre: 'Aretes con Perlas', precio: 26000 })}
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
