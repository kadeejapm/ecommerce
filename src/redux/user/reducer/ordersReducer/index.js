import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"


const orderRducer = createSlice({
    initialState,
    name:'orderRducer',
    reducers:{
        viewAllOrders:()=>{
            
        },
        viewOrder:()=>{

        },
    }
})



export const { viewAllOrders,viewOrder } = orderRducer.actions

export default orderRducer.reducer;