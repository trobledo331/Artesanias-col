import { configureStore } from "@reduxjs/toolkit";
import { carritoSlice } from "./";


export const store = configureStore({
  reducer: {
    carrito: carritoSlice.reducer,
  }
});