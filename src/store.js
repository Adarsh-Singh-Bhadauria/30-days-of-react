import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './app/store/cartslice'
import modalReducer from './app/modal/modalSlice'

export const store= configureStore({
    reducer:{
        cart:cartReducer,
        modal: modalReducer
    }
})