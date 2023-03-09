import { DeleteBookingAction, FetchBookingsAction } from "./action-creators";

export enum ActionTypes {
    fetchBookings,
    deleteBooking,
}

export type Action = FetchBookingsAction | DeleteBookingAction;