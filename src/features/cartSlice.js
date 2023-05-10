
import { createSlice } from "@reduxjs/toolkit";
import productData from '../productData.json';

const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                state.cart.push(newItem);
            }

        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
