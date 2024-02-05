import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"


const cartReducer = createSlice({
    initialState,
    name:'cartReducer',
    reducers:{
        viewAllCarts:()=>{

        },
        viewCart:()=>{

        },
    }
})



export const { viewAllCarts,viewCart } = cartReducer.actions

export default cartReducer.reducer;
