import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from '../../helpers/getData';
import { bookings } from "../../data/bookings";
import apiFetch from "../../helpers/apiFetch";

export const getBookings = createAsyncThunk('bookings/getBookings', async () => {
    const parameters = {
        url: 'bookings',
        method: 'GET'
    }
    return await apiFetch(parameters)
})

export const getBooking = createAsyncThunk('bookings/getBooking', async (id) => {
    const parameters = {
        url: `bookings/${id}`,
        method: 'GET'
    }
    const booking = await apiFetch(parameters)
    return booking
})

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
            if (action.payload === 'all') {
                filter = state.allBookings.data
            } else {
                if (action.payload === 'in') {
                    filter = state.allBookings.data.filter(e => e.status === 'Checking-In')
                } else {
                    if (action.payload === 'out') {
                        filter = state.allBookings.data.filter(e => e.status === 'Checking Out')
                    } else {
                        filter = state.allBookings.data.filter(e => e.status === 'In Progress')
                    }
                }
            }
            state.bookings.data = filter
        },
        resetBooking: (state) => {
            // return {
                // ...state,
                state.booking = null
            // }
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
                console.log('Failed to load bookings')
            })

            .addCase(getBooking.pending, (state) => {
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

export const { filterBookings, resetBooking } = bookingsSlice.actions

export default bookingsSlice.reducer