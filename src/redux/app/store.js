import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from '../features/usersSlice';
import { bookingsSlice } from '../features/bookingsSlice';
import { roomsSlice } from '../features/roomsSlice';
import { reviewsSlice } from '../features/reviewsSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsSlice.reducer,
    rooms: roomsSlice.reducer,
    users: usersSlice.reducer,
    reviews: reviewsSlice.reducer
  },
})