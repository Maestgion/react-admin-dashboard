import {configureStore} from "@reduxjs/toolkit"
import adminReducer from "../slices/adminSlice"

const store = configureStore({adminReducer})


export default store