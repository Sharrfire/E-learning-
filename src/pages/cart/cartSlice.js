import { createSlice } from "@reduxjs/toolkit";
import userLocal from "~/api/userLocal";
let cartItemsStore = [];
let getUser = userLocal.get();
if (localStorage.getItem('CART')) cartItemsStore = JSON.parse(localStorage.getItem('CART'));

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: cartItemsStore,
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            const itemInCart = state.cart.find((item) => item.id === newItem.id);
            if (itemInCart) {
                return
            } else {
                state.cart.push({ ...newItem });

            }
            // state.cartItems.push(action.payload);
            localStorage.setItem('CART', JSON.stringify(state.cart));

        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const index = state.cart.findIndex((x) => x.id === id);
            let res1 = JSON.parse(localStorage.getItem('CART'));
            res1.splice(index, 1);
            state.cart = res1;
            localStorage.setItem('CART', JSON.stringify(state.cart));
        },
        removeAll: () => {
            const updatedCourse = JSON.parse(localStorage.getItem('CART'));
            const userParse = JSON.parse(localStorage.getItem('USER_LOGIN'));
            const newRegisteredCourses = userParse.registeredCourses;

            const newUserData = { ...userParse, registeredCourses: [...newRegisteredCourses, ...updatedCourse] }

            localStorage.setItem('USER_LOGIN', JSON.stringify(newUserData));
            localStorage.removeItem('CART');


        },
    },
},
);


export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;