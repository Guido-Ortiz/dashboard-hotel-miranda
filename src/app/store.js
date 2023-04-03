import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from '../features/usersSlice'
import {bookingsSlice} from '../features/bookingsSlice'

export const store = configureStore({
  reducer: {
    bookings: bookingsSlice.reducer,
    users: usersSlice.reducer
  },
})