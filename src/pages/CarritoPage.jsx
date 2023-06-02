import React from "react";
import { useCarritoStore } from "../hooks";

export const CarritoPage = () => {
  const { carrito, setDeleteProduct } = useCarritoStore();

  return (
    <div className="Productos1">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Carrito de compras</span>
        </h2>
      </div>

      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1"></div>
        {carrito.map((item, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div key={item.id} className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src={item.imagen}
                    alt="Mochila Wayuu 1"
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">{item.nombre}</h6>
                  <div className="d-flex justify-content-center">
                    <h6>${item.precio}</h6> 
                    <h6 className="text-muted ml-2">
                      <del>$90.000</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <p className="btn btn-sm text-dark p-0"> 
                    Cantidad : {item.quantity}
                  </p> 
                  <button
                    className="ntn btn-danger"
                    onClick={() => setDeleteProduct(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
