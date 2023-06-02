import React from 'react'
import Logo from './../assets/img/Logo.png'
import NombreEmpresa from './../assets/img/Nombre.png' 
import Payments from './../assets/img/payments.png'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
        <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <a href="" className="text-decoration-none">
                            <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1"></span></h1>
                                <img className="logo" src={Logo} />
                                <img className="nombre" src={NombreEmpresa} />   
                        </a>
                        <p>La empresa Artesanias-col es una organización que se dedica a la venta de productos artesanales 100% colombianos.</p>
                            
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Bogotá, Colombia</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>artesanias_col@gmail.com</p>
                        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+057 314 678 30</p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5"> 
                                <h5 className="font-weight-bold text-dark mb-4">Enlaces</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-dark mb-2" to={'/'}><i className="fa fa-angle-right mr-2"></i>Inicio</Link>
                                    <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>Nuestra tienda</a>
                                    <Link className="text-dark mb-2" to={'/carrito'}><i className="fa fa-angle-right mr-2"></i>Carro de compras</Link>
                                    <a className="text-dark" href="contact.html"><i className="fa fa-angle-right mr-2"></i>Contactanos</a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Enlaces</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Incio</a>
                                    <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>Medios de pago</a>
                                    <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Pasos para tu compra</a>
                                    <a className="text-dark mb-2" href="cart.html"><i className="fa fa-angle-right mr-2"></i>Politicas de compra</a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4"> Boletin informativo</h5>
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control border-0 py-4" placeholder="Tu nombre y apellido" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control border-0 py-4" placeholder="Tu correo"
                                            required="required" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subcribete ahora</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-top border-light mx-xl-5 py-4">
                    <div className="col-md-6 px-xl-0">
                        <p className="mb-md-0 text-center text-md-left text-dark">
                            &copy; <a className="text-dark font-weight-semi-bold" href="#">Copyright 2023 Artesanias-col-</a>
                            <a className="text-dark font-weight-semi-bold" href="https://htmlcodex.com">Proyecto Bootcamp</a>
                            <br />
                            Productos 100% <a href="https://themewagon.com" target="_blank">Colombianos</a>
                        </p>
                    </div>
                    <div className="col-md-6 px-xl-0 text-center text-md-right">
                        <img className="img-fluid" src={Payments} alt="" />
                    </div>
                </div>
            </div>
            </footer>
    )
}
