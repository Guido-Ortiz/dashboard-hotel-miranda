import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from '../../helpers/getData';
import { reviews } from "../../data/reviews";
import apiFetch from "../../helpers/apiFetch";

export const getReviews = createAsyncThunk('reviews/getReviews', async () => {
    const parameters = {
        url: 'contacts',
        method: 'GET'
    }
    const contacts = await apiFetch(parameters)
    return contacts
})

// export const getUser = createAsyncThunk('user/getUser', async (id) => {
//     return await id
// })

const initialState = {
    reviews: [],
    allReviews: [],
    review: null,
    status: 'Loading'
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
        .addCase(getReviews.pending, (state) => {
            state.status = 'Loading'
        })
            .addCase(getReviews.fulfilled, (state, action) => {
                state.status = 'Fullfilled'
                state.reviews = action.payload
                state.allReviews = action.payload
            })
            .addCase(getReviews.rejected, (state) => {
                state.status = 'Error'
            })
    }
})

export default reviewsSlice.reducer