import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from '../helpers/getData';
import { bookings } from "../data/bookings";

export const getBookings = createAsyncThunk(
    'bookings/getBookings',
    async () => {
        return await getData(bookings)
    }
)

// export const getUser = createAsyncThunk('user/getUser', async (id) => {
//     return await id
// })

const initialState = {
    bookings: [],
    allBookings: [],
    booking: null
}

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    // reducers: {
    //     someAction: function() {
   
    //     }
    //  },
    extraReducers: (builder) => {
        builder
            .addCase(getBookings.fulfilled, (state, action) => {
                state.bookings = action.payload
                state.allBookings = action.payload
            })
            .addCase(getBookings.rejected, () => {
                console.log('Failed to load users')
            })
    }
})

export default bookingsSlice.reducer