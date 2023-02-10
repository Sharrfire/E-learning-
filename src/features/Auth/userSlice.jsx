import { createSlice } from "@reduxjs/toolkit";
import userLocal from "~/api/localStorage";

const initialState = {
    userInfor: userLocal.get(),
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