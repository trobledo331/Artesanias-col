import React from 'react'
import Bolso1 from './../assets/img/bolso-1.png'

export const Categorias = () => {
    return (
        <body>
            <div className="container-fluid pt-5" />
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4">
                        <p className="text-right">8 Productos</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={Bolso1} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Mochilas</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4">
                        <p className="text-right">8 Productos</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/Components/img/Collar 9.png" alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Collares</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4">
                        <p className="text-right">15 Products</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/Components/img/cat-3.jpg" alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4">
                        <p className="text-right">15 Products</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/Components/img/cat-4.jpg" alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4">
                        <p className="text-right">15 Products</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/Components/img/cat-5.jpg" alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Bags</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="cat-item d-flex flex-column border mb-4">
                        <p className="text-right">15 Products</p>
                        <a className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src="src/assets/Components/img/cat-6.jpg" alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">Shoes</h5>
                    </div>
                </div>
            </div>
        </body>
    )
}
