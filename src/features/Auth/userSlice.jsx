import { createSlice } from "@reduxjs/toolkit";
import userApi from "~/api/userApi";

const initialState = {
    userInfor: userApi.get(),
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers:{
        setUserInfor:(state,action)=>{
            state.userInfor = action.payload;
        },
    },
});
export const {setUserInfor} = userSlice.actions;
export default userSlice.reducer;