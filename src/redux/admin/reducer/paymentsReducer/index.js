import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"


const paymentReducer = createSlice({
    initialState,
    name:'paymentReducer',
    reducers:{
        viewAllPayments:()=>{

        },
        viewPayment:()=>{

        },
    }
})



export const { viewAllPayments,viewPayment } = paymentReducer.actions

export default paymentReducer.reducer;
