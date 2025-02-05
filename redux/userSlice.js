import { createSlice } from "@reduxjs/toolkit";


const initialValueUser = {
    userId: null
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initialValueUser,
    reducers: {
        reducerSetUser: (state, action) => {
           state.userId = action.payload.userId
        }
    }
}
)

export const { reducerSetUser } = userSlice.actions;

export {userSlice}; 