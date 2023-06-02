import React from 'react'
import Bolso1 from './../assets/img/bolso-1.png'
import Bolso2 from './../assets/img/bolso-2.png'
import Bolso3 from './../assets/img/bolso-3.png'
import Bolso4 from './../assets/img/bolso-4.png'
import Bolso5 from './../assets/img/bolso-5.png'
import Bolso6 from './../assets/img/bolso-6.png'
import Bolso7 from './../assets/img/bolso-7.png'
import Bolso8 from './../assets/img/bolso-8.png'

export const Productos1 = ({ producto, agregarAlCarrito }) => {
    return (
        <div className='Productos1'>
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">Mochilas</span>
                </h2>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Bolso1} alt="Mochila Wayuu 1" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mochila Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$80.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$90.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </a>
                            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Bolso2} alt="Mochila Wayuu 2" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mochila Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$70.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$80.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </a>
                            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Bolso3} alt="Mochila Wayuu 3" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mochila Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$68.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$85.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </a>
                            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Bolso4} alt="Mochila Wayuu 4" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mochila Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$75.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$90.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </a>
                            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Bolso5} alt="Mochila Wayuu 5" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mochila Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$90.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$100.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </a>
                            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Bolso6} alt="Mochila Wayuu 6" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mochila Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$110.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$123.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </a>
                            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Bolso7} alt="Mochila Wayuu 7" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mochila Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$100.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$120.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </a>
                            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Bolso8} alt="Mochila Wayuu 8" />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Mochila Wayuu</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$85.000</h6>
                                <h6 className="text-muted ml-2">
                                    <del>$95.000</del>
                                </h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0">
                                <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
                            </a>
                            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};      
