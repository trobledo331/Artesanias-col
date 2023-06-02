import React from 'react';
import Bolso1 from './../assets/img/bolso-1.png';
import Collar9 from './../assets/img/Collar-9.png';
import Mascara6 from './../assets/img/Mascara-6.png';
import Aretes1 from './../assets/img/Aretes-1.png';
import Platos3 from './../assets/img/Platos-3.png';
import Ceramica3 from './../assets/img/ceramica-3.png';
import { Link, useNavigate } from 'react-router-dom';

export const Categorias = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
    };

    return (
        <div className="Categorias">
            <div className="container-fluid pt-5" />
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-items">
                        <p className="text-right">8 Productos</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={Bolso1} />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Mochilas</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-items">
                        <p className="text-right">8 Productos</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={Collar9} />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Collares</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-items">
                        <p className="text-right">8 Productos</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={Mascara6} alt="" />
                        </a>
                        <h5 to="/productos" className="font-weight-semi-bold m-0">Máscaras</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-items">
                        <p className="text-right">8 Productos</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={Aretes1} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Joyería</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-items">
                        <p className="text-right">9 Productos</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={Platos3} alt="" />
                        </a>
                        <h5 to="/productos" className="font-weight-semi-bold m-0">Utensilios de cocina</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-items">
                        <p className="text-right">9 Productos</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={Ceramica3} alt="" />
                        </a>
                        <h5 to="/productos" className="font-weight-semi-bold m-0">Cerámica</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
