import axios from 'axios';
import { TOGGLE_SIDEBAR, GET_BOOKINGS, FILTER_BOOKINGS, GET_USERS, FILTER_USERS } from "./constants";

export function toggleSidebar(){
    return {
        type: TOGGLE_SIDEBAR,
    }
}

export function getBookings(){
    return async function(dispatch){
        try{
            const response = await axios.get('bookingsMockData.json')
            return dispatch({
                type: GET_BOOKINGS,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function filterBookings(payload){
    return {
        type: FILTER_BOOKINGS,
        payload
    }
}

export function getUsers(){
    return async function(dispatch){
        try{
            const response = await axios.get('usersMockData.json')
            return dispatch({
                type: GET_USERS,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function filterUsers(payload){
    return {
        type: FILTER_USERS,
        payload
    }
}