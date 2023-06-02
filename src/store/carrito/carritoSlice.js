import { createSlice } from "@reduxjs/toolkit";

const saveCarrito = (carrito,total)=>{
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("total", JSON.stringify(total));
}

export const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    carrito: JSON.parse( localStorage.getItem('carrito')) || [],
    total : JSON.parse( localStorage.getItem('total')) || 0,
  }, 
  reducers: {
    onAddProduct: ( state, { payload } ) => {
      let add = false;
      console.log( state, payload );
      state.carrito.forEach( producto => {
        if ( producto.id === payload.id ) {
         producto.quantity += 1; //++quantity
         add = true;
        }
      });

      if(!add){
        payload.quantity = 1;
        state.carrito.push(payload);
      }
      state.total += 1;
      saveCarrito(state.carrito, state.total)
    }, 
    onDeleteProduct: ( state, { payload } ) => {


      state.carrito.forEach((item, index)=> {

        if (item.id === payload.id) {

          if(item.quantity > 1) {
          item.quantity -= 1;
          }else{
            state.carrito.splice(index, 1);
          }
          state.total -= 1;
          saveCarrito(state.carrito, state.total)
        }
      });
    }
  }
})

export const { onAddProduct, onDeleteProduct } = carritoSlice.actions;