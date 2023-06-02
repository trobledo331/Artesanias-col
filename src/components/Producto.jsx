import React from "react";

export const Producto = ({ producto}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src={producto.imagen} alt="Mochila Wayuu 1" />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">{producto.nombre}</h6>
          <div className="d-flex justify-content-center">
            <h6>${producto.precio}</h6>
            <h6 className="text-muted ml-2">
              <del>$90.000</del>
            </h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a className="btn btn-sm text-dark p-0">
            <i className="fas fa-eye text-primary mr-1"></i>Ver Detalle
          </a>
          <button onClick={() => {console.log('meOprimio')}}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
