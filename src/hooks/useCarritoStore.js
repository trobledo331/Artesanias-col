import { useDispatch, useSelector } from "react-redux"
import { onAddProduct, onDeleteProduct } from "../store";

export const useCarritoStore = () => {

  const dispatch = useDispatch();
  const { carrito, total } = useSelector( state => state.carrito );

  const setAddProduct = async ( producto ) => {
    dispatch( onAddProduct( producto ) )
  }

  const setDeleteProduct = async( producto ) => {
    dispatch( onDeleteProduct( producto ) )
  }

  


  return {

    carrito,
    total,
    setAddProduct,
    setDeleteProduct,
  }
}
