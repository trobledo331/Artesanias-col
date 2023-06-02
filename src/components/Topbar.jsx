import React, { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ingresar } from '../components/Ingresar';
import { Registrar } from '../components/Registrar';
import Carrusel1 from './../assets/img/carousel-1.jpg';
import Carrusel2 from './../assets/img/carousel-2.jpg';
import Logo from './../assets/img/Logo.png';
import NombreEmpresa from './../assets/img/Nombre.png';

export const Topbar = () => {

    const navigate = useNavigate();
    return (
        <div className="container-fluid mb-5">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a
                        className="categorias shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                        data-toggle="collapse"
                        to="#navbar-vertical"
                    >
                        <h6 className="m-0">Categorías </h6>
                    </a>
                    <nav
                        className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                        id="navbar-vertical"
                    >
                        <div className="navbar-nav w-100 overflow-hidden">
                            
                            <span onClick={() => {navigate('/Productos1')}} className="nav-item nav-link">
                                Mochilas
                            </span>
                            <span onClick={() => {navigate('/Productos2')}} className="nav-item nav-link">
                                Collares
                            </span>
                            <span onClick={() => {navigate('/Productos3')}} className="nav-item nav-link">
                                Aretes
                            </span>
                            <span onClick={() => {navigate('/Productos4')}} className="nav-item nav-link">
                                Manillas
                            </span>
                            <span onClick={() => {navigate('/Productos5')}} className="nav-item nav-link">
                                Máscaras
                            </span>
                            <span onClick={() => {navigate('/Productos6')}} className="nav-item nav-link">
                                Cerámica
                            </span>
                            <span onClick={() => {navigate('/Productos7')}} className="nav-item nav-link">
                                Utensilios de cocina
                            </span>
                            <span className="nav-item nav-link">
                                Exclusivos
                            </span>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a
                        
                            className="text-decoration-none d-block d-lg-none"
                        >
                            <img className="logo" src={Logo} />
                            <img className="nombre" src={NombreEmpresa} />
                            <h1 className="m-0 display-5 font-weight-semi-bold">
                                <span className="text-primary font-weight-bold border px-3 mr-1"></span>
                            </h1>
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav mr-auto py-0">
                                <a href="index.html" className="nav-item nav-link">
                                    Inicio
                                </a>
                                <a href="shop.html" className="nav-item nav-link">
                                    Tienda
                                </a>
                                <a href="detail.html" className="nav-item nav-link">
                                    Detalles 
                                </a>
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Páginas
                                    </a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="cart.html" className="dropdown-item">
                                            Carrito de compras
                                        </a>
                                        <a href="checkout.html" className="dropdown-item">
                                            Pagos
                                        </a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">
                                    Contacto
                                </a>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <a to="/ingresar" className="nav-item nav-link">
                                    Ingresar
                                </a>
                                <a to="/registrar" className="nav-item nav-link">
                                    Registrarse
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div id="header-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="img-fluid" src={Carrusel1} alt="Carousel 1" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3">
                                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                                            20% de descuento por tu primer pedido
                                        </h4>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                                            Artesanías originarias de Colombia
                                        </h3>
                                        <a className="btn btn-light py-2 px-3">
                                            Tienda
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid" src={Carrusel2} alt="Carousel 2" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3">
                                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                                            Te regalamos un llavero por compras superiores a 40.000
                                        </h4>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                                            Apoya a nuestros artesanos
                                        </h3>
                                        <a className="btn btn-light py-2 px-3">
                                            Tienda
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-dark">
                                <span className="carousel-control-prev-icon mb-n2"></span>
                            </div>
                        </a>
                        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                            <div className="btn btn-dark">
                                <span className="carousel-control-next-icon mb-n2"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};