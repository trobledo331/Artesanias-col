import React from 'react'
import Manilla1 from './../assets/img/Manilla-1.png'
import Manilla2 from './../assets/img/Manilla-2.png'
import Manilla3 from './../assets/img/Manilla-3.png'
import Manilla4 from './../assets/img/Manilla-4.png'
import Manilla5 from './../assets/img/Manilla-5.png'
import Manilla6 from './../assets/img/Manilla-6.png'
import Manilla7 from './../assets/img/Manilla-7.png'
import Manilla8 from './../assets/img/Manilla-8.png'
import Manilla9 from './../assets/img/Manilla-9.png'

export const Productos4 = ({ producto, agregarAlCarrito, quitarDelCarrito }) => {
    return (
        <div className="Productos-4">
            {/* <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p> */}
            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
            <button onClick={() => quitarDelCarrito(producto)}>Quitar del carrito</button>
        
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Manillas</span></h2>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Manilla1} />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Manilla Embera Chamí</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$22.000</h6><h6 className="text-muted ml-2"><del>$28.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Manilla2} />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Manilla Embera Mo Do</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$25.000</h6><h6 className="text-muted ml-2"><del>$30.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Manilla3} />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Manilla Embera Umada</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$23.000</h6><h6 className="text-muted ml-2"><del>$27.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Manilla4} />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Manilla Embera Ambuara</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$26.000</h6><h6 className="text-muted ml-2"><del>$31.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Manilla5} />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Manilla Embera Dama Boro</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$26.000</h6><h6 className="text-muted ml-2"><del>$34.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Manilla6} />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Manilla Embera Awera</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$24.000</h6><h6 className="text-muted ml-2"><del>$27.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Manilla7} />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Manilla Embera Ea De</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$28.000</h6><h6 className="text-muted ml-2"><del>33.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Manilla8} />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Manilla Embera Beda Dru</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$25.000</h6><h6 className="text-muted ml-2"><del>$29.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={Manilla9} />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">Manilla Emberá Katío</h6>
                            <div className="d-flex justify-content-center">
                                <h6>$21.000</h6><h6 className="text-muted ml-2"><del>$26.000</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                            <a className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
