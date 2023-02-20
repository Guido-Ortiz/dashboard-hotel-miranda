import axios from 'axios';
import { TOGGLE_SIDEBAR, GET_BOOKINGS } from "./constants";

export function toggleSidebar(){
    return {
        type: TOGGLE_SIDEBAR,
    }
}

export function getBookings(a){
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
    // return {
    //     type: GET_BOOKINGS,
    //     payload: a
    // }
}