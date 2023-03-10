import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from "./action-types";

export interface Booking {
    id: number;
    client: string;
    order: Date;
    checkin: Date;
    checkout: Date;
    request: string;
    room: number;
    status: string;
}

export interface User {
  id: number;
  name: string;
  start: Date;
  description: string;
  contact: string;
  status: string;
}

export interface FetchBookingsAction {
    type: ActionTypes.fetchBookings;
    payload: Booking[];
}

export interface DeleteBookingAction {
    type: ActionTypes.deleteBooking;
    payload:  number;
}

export const fetchPosts = () => {
    return async (dispatch:  Dispatch) => {
      try{
  
        const response = await axios.get<Booking[]>('bookingsMockData.json');
        dispatch<FetchBookingsAction>({
          type: ActionTypes.fetchBookings,
          payload: response.data
        })
      }
      catch(e){
        console.log(e)
      }
    }
  };

  export const deleteBooking = (id: number): DeleteBookingAction => {
    return {
      type: ActionTypes.deleteBooking,
      payload: id
    };
  };

  export interface FetchUsersAction {
    type: ActionTypes.fetchUsers;
    payload: User[];
}

export interface DeleteUserAction {
    type: ActionTypes.deleteUser;
    payload:  number;
}

export const fetchUsers = () => {
    return async (dispatch:  Dispatch) => {
      try{
  
        const response = await axios.get<User[]>('usersMockData.json');
        dispatch<FetchUsersAction>({
          type: ActionTypes.fetchUsers,
          payload: response.data
        })
      }
      catch(e){
        console.log(e)
      }
    }
  };

  export const deleteUser = (id: number): DeleteUserAction => {
    return {
      type: ActionTypes.deleteUser,
      payload: id
    };
  };