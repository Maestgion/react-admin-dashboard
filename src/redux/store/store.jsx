import {configureStore} from "@reduxjs/toolkit"
import adminReducer from "../slices/adminSlice"

export const store = configureStore({adminReducer})