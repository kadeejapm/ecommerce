import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"


const userReducer = createSlice({
    initialState,
    name:'userReducer',
    reducers:{
        ViewAllUsers:()=>{

        },
        viewUser:()=>{

        },
    }
})



export const { ViewAllUsers,viewUser } = userReducer.actions

export default userReducer.reducer;
