import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    reviewId: null,     //usado para modificações/salvamento no fireBase
    reviewName: null,
    reviewDate: null,
    reviewImg: null,
    reviewRef

}

export const reviewSlice = createSlice({
    name: 'review',
    initialState: initialValues,
    reducers: {
        reducerSetReview: (state, action) =>{
            state.reviewId = action.payload.reviewId
            state.reviewName = action.payload.reviewName
            state.reviewDate = action.payload.reviewDate
            state.reviewImg = action.payload.reviewImg
            state.reviewRef = action.payload.reviewRef
        }
    }

});

export const { reducerSetReview } = reviewSlice.actions;

export default reviewSlice; 