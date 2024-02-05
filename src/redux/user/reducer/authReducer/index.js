import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


const userReducer = createSlice({
    initialState,
    name:'userReduser',
    reducers:{
        isLogin:()=>{

        },
        isSignup:()=>{
            
        },
        isLoggOut:()=>{
            
        },
        profile:()=>{

        },

    }
})


export const {isLogin,isSignup,isLoggOut,profile}=userReducer.actions
export default userReducer.reducer;