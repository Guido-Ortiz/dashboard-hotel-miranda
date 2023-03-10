import { DeleteBookingAction, DeleteUserAction, FetchBookingsAction, FetchUsersAction } from "./action-creators";

export enum ActionTypes {
    fetchBookings,
    deleteBooking,
    fetchUsers,
    deleteUser
}

export type Action = FetchBookingsAction | DeleteBookingAction | FetchUsersAction | DeleteUserAction;