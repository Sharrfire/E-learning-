import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: []

};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // const newItems = {id, course};
            // state.cartItems.push(newItem.id)
            state.cartItems.push(action.payload);

        },
    },
    removeFormCart: (state, action) => {
        const removeItem = state.cart.filter((item) => item.id !== action.payload);
        state.cart = removeItem;
    },
},
);
export const { addToCart, removeFormCart } = cartSlice.actions;
export default cartSlice.reducer;