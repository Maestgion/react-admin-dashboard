import {createSlice} from "@reduxjs/toolkit"

const adminSlice = createSlice({
    name: "user",
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false

    },
    reducers:{
        loginStart: (state)=>{
            state.isFetching=true;
        },
        loginSuccess: (state, action)=>{
            state.isFetching=false;
            state.currentUser = action.payload
        },
        loginFailure : (state)=>{
            state.isFetching = false
            state.error = true
        },
        logout : (state) =>{
            state.currentUser=null
        }
    }
})

export const {loginStart, loginSuccess, loginFailure} = adminSlice.actions;
export default adminSlice.reducer;