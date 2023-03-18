import {createSlice} from "@reduxjs/toolkit"
import { Action } from "@remix-run/router"

const productSlice = createSlice({
    name: "product",
    initialState:{
        products:[],
        isFetching: false,
        error: false

    },
    reducers:{

        // get all products

        getAllProductStart:(state)=>{
            state.isFetching = true
            state.error=false
        },
        getAllProductSuccess: (state, action)=>{
            state.isFetching = false,
            state.products = action.payload
        },
        getAllProductFailure: (state)=>{
            state.isFetching = false,
            state.error = true
        },
        // edit product details
        editProductStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        editProductSuccess: (state, action)=>{
            state.isFetching = false
            state.products[
                state.products.findIndex((item)=>item._id === action.payload.id) 
            ]  = action.payload.product
        },
        editProductFailure: (state)=>{
            state.isFetching = false,
            state.error = true
        },
        // add a new Product 
        addProductStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        addProductSuccess: (state, action)=>{
            state.isFetching = false,
            state.products.push(action.payload)
        },
        addProductFailure: (state)=>{
            state.isFetching=false,
            state.error = true
        },
        // delete a product
        deleteProductStart:(state)=>{
            state.isFetching=true
            state.error = true
        },
        deleteProductSuccess:(state,action)=>{
            state.isFetching = true
            state.products.splice(state.products.findIndex(item=>item._id===action.payload.id),1)

        },
        deleteProductFailre: (state)=>{
            state.isFetching = false,
            state.error = true
        }
    }


})


export const { getAllProductStart,
    getAllProductSuccess,
    getAllProductFailure,
    editProductStart,
    editProductSuccess,
    editProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure} = productSlice.actions

export default productSlice.reducer