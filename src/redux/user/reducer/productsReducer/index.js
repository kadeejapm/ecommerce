import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"


const productReducer = createSlice({
    initialState,
    name:'productReducer',
    reducers:{
        createProduct:()=>{

        },
        updateProduct:()=>{

        },
        deleteProduct:()=>{

        },
        viewProduct:()=>{

        },
        listAllProducts:()=>{

        },
    }
})


export const { createProduct,deleteProduct,listAllProducts,updateProduct,viewProduct } = productReducer.actions

export default productReducer.reducer;