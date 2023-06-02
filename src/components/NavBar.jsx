import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/img/Logo.png'
import NombreEmpresa from './../assets/img/Nombre.png'

export const NavBar = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row bg-secondary py-2 px-xl-5">
                <div className="col-lg-6 d-none d-lg-block">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-dark" >Preguntas Frecuentes</a>
                        <span className="text-muted px-2">|</span>
                        <a className="text-dark" >Ayuda</a>
                        <span className="text-muted px-2">|</span>
                        <a className="text-dark" >Soporte</a>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-dark px-2" >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-dark px-2" >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-dark px-2" >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-dark px-2" >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-dark pl-2" >
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a  className="text-decoration-none">
                        <img className="logo" src={Logo} />
                        <img className="logo" src={NombreEmpresa} />
                    </a>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Buscar productos" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-6 text-right">
                    <a  className="btn border">
                        <i className="fas fa-heart text-primary"></i>
                        <span className="badge">0</span>
                    </a>
                    <Link to={ '/carrito'} className="btn border">
                        <i className="fas fa-shopping-cart text-primary"></i>
                        <span className="badge">0</span>
                    </Link>
                </div>
            </div>
        </div>
        
        </>
    )
}
