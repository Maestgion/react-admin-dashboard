import { loginFailure, loginStart, loginSuccess } from "../slices/userSlice";
import { publicRequest, userRequest } from "../../assets/axios/reqMethod"
import {
  getAllProductFailure,
  getAllProductStart,
  getAllProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  editProductFailure,
  editProductStart,
  editProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "../slices/productSlice";

export const login = async (dispatch, user)=>
{
    dispatch(loginStart())
    try{
        const res = await publicRequest.post("/users/login", user);
        dispatch(loginSuccess(res.data))
    }catch(e){
        dispatch(loginFailure())
    }
}

export const getAllProducts = async (dispatch)=>{
    dispatch(getAllProductStart())
    try{
        const res = await publicRequest.get("/products")
        dispatch(getAllProductSuccess(res.data))
    }catch(e)
    {
        dispatch(getAllProductFailure())
    }
}

export const editProducts = async (dispatch, id, product)=>{
    dispatch(editProductStart())
    try{

        dispatch(editProductSuccess({id, product}))

    }catch(e)
    {
        
        dispatch(editProductFailure()) 
       }
}


export const addProduct = async (product, dispatch)=>{
    dispatch(addProductStart())
    try{
        const res = await userRequest.get("/products", product)
        dispatch(addProductSuccess(res.data))
    }catch(e)
    {
        dispatch(addProductFailure())
    }
}

export const deleteProduct = async (id, dispatch)=>{
    dispatch(deleteProductStart())
    try{
        deleteProductSuccess({id})
    }catch(e)
    {
        dispatch(deleteProductFailure())
    }
}