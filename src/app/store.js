import userSlice from '~/features/Auth/userSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
    userSlice: userSlice,
};
const store = configureStore({
    reducer:rootReducer,
});
export default store;
