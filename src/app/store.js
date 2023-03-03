import userSlice from '~/features/Auth/userSlice';
import cartSlice from '~/pages/cart/cartSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
    user: userSlice,
    cart: cartSlice,

};
const store = configureStore({
    reducer: rootReducer,

});
export default store;
