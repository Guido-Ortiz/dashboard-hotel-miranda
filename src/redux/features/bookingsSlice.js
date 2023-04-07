import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from '../../helpers/getData';
import { bookings } from "../../data/bookings";

export const getBookings = createAsyncThunk(
    'bookings/getBookings',
    async () => {
        return await getData(bookings)
    }
)

export const getBooking = createAsyncThunk(
    'booking/getBooking',
    async (id) => {
        const single_booking = bookings.find(e => e.id === id)
        const booking = await getData(single_booking)
        return booking
    }
)

export const deleteBooking = createAsyncThunk(
    'booking/deleteBooking',
    async (id) => {
        const booking_to_delete = bookings.find(e => e.id === id)
        const booking = await getData(booking_to_delete)
        return booking
    }
)

const initialState = {
    bookings: [],
    allBookings: [],
    booking: null,
    status: 'Loading'
}

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        filterBookings: (state, action) => {
            let filter = []
            if(action.payload === 'all'){
                filter = state.allBookings
            } else {
                if(action.payload === 'in'){
                    filter = state.allBookings.filter(e => e.status === 'Check-In')
                } else {
                    if(action.payload === 'out'){
                        filter = state.allBookings.filter(e => e.status === 'Check-Out')
                    } else {
                        filter = state.allBookings.filter(e =>e.status === 'In-Progress')
                    }
                }
            }
            state.bookings = filter
        }
     },
    extraReducers: (builder) => {
        builder
            .addCase(getBookings.pending, (state) => {
                state.status = 'Loading'
            })
            .addCase(getBookings.fulfilled, (state, action) => {
                state.status = 'Fullfilled'
                state.bookings = action.payload
                state.allBookings = action.payload
            })
            .addCase(getBookings.rejected, (state) => {
                state.status = 'Error'
            })

            .addCase(getBooking.pending,  (state) => {
                state.status = 'Loading'
            })
            .addCase(getBooking.fulfilled, (state, action) => {
                state.status = 'Fullfilled'
                state.booking = action.payload
            })
            .addCase(getBooking.rejected, (state) => {
                state.status = 'Error'
            })

            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.status = 'Fullfilled'
                state.bookings = state.bookings.map(e => e.id === action.payload.id ? action.payload : e)
            })
    }
})

export const { filterBookings } = bookingsSlice.actions

export default bookingsSlice.reducer