import { createSlice } from "@reduxjs/toolkit";
import productData from '../productData.json';

const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},

})

export default cartSlice.reducer;