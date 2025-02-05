import {configureStore} from "@reduxjs/toolkit"
import { reviewSlice} from "./reviewSlice"
import { userSlice } from "./userSlice"

export const store = configureStore({
    reducer:{
        review: reviewSlice.reducer,
        user: userSlice.reducer
    }
})