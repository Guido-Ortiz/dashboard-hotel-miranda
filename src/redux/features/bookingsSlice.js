import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async (id) => {
    const parameters = {
        url: `bookings/${id}`,
        method: 'DELETE'
    }
    return await apiFetch(parameters)
})

export const editBooking = createAsyncThunk('bookings/editBooking', async (booking) => {
    const parameters = {
        url: `bookings/${booking.booking_id}`,
        method: 'PUT',
        body: booking.newBooking
    }
    return await apiFetch(parameters)
})

const initialState = {
    bookings: [],
    allBookings: [],
    booking: null,
    status: 'idle'
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
            state.booking = null
            state.status = 'idle'
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

            
            .addCase(deleteBooking.pending, (state) => {
                state.status = 'Loading'
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.status = 'idle'
            })
            .addCase(deleteBooking.rejected, (state) => {
                state.status = 'Error'
            })

            .addCase(editBooking.fulfilled, (state, action) => {
                state.status = 'idle'
            })
    }
})

export const { filterBookings, resetBooking } = bookingsSlice.actions

export default bookingsSlice.reducer