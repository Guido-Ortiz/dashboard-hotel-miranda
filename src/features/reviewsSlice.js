import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from '../helpers/getData';
import { reviews } from "../data/reviews";

export const getReviews = createAsyncThunk(
    'reviews/getReviews',
    async () => {
        return await getData(reviews)
    }
)

// export const getUser = createAsyncThunk('user/getUser', async (id) => {
//     return await id
// })

const initialState = {
    reviews: [],
    allReviews: [],
    review: null
}

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    // reducers: {
    //     someAction: function() {
   
    //     }
    //  },
    extraReducers: (builder) => {
        builder
            .addCase(getReviews.fulfilled, (state, action) => {
                state.reviews = action.payload
                state.allReviews = action.payload
            })
            .addCase(getReviews.rejected, () => {
                console.log('Failed to load users')
            })
    }
})

export default reviewsSlice.reducer