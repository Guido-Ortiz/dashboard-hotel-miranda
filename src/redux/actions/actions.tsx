import axios from 'axios';
import { TOGGLE_SIDEBAR, GET_BOOKINGS, FILTER_BOOKINGS, GET_USERS, FILTER_USERS, GET_CONTACTS, ARCHIVED_CONTACT, FILTER_CONTACTS, GET_ROOMS, FILTER_ROOMS, DELETE_BOOKING, DELETE_USER, DELETE_ROOM, DELETE_CONTACT, GET_BOOKING_DETAIL, EDIT_BOOKING, CREATE_USER, CREATE_ROOM } from "./constants";

export function toggleSidebar() {
    return {
        type: TOGGLE_SIDEBAR,
    }
}

export function getBookings() {
    return async function (dispatch: (arg0: { type: string; payload: any; }) => any) {
        try {
            const response = await axios.get('bookingsMockData.json')
            return dispatch({
                type: GET_BOOKINGS,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export function deleteBooking(payload: any) {
    return {
        type: DELETE_BOOKING,
        payload
    }
}

export function filterBookings(payload: any) {
    return {
        type: FILTER_BOOKINGS,
        payload
    }
}

export function getBookingDetail(payload: any) {
    return {
        type: GET_BOOKING_DETAIL,
        payload
    }
}

// export function getBookingDetail(id) {
//     return async function (dispatch) {
//         try {
//             const response = await axios.get(..../ ${ id })
//             return dispatch({
//                 type: GET_BOOKING_DETAIL,
//                 payload: response.data
//             })
//         }
//         catch (e) {
//             console.log(e)
//         }
//     }
// }

export function editBooking(payload: any) {
    return {
        type: EDIT_BOOKING,
        payload
    }
}

export function getUsers() {
    return async function (dispatch: (arg0: { type: string; payload: any; }) => any) {
        try {
            const response = await axios.get('usersMockData.json')
            return dispatch({
                type: GET_USERS,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export function deleteUser(payload: any) {
    return {
        type: DELETE_USER,
        payload
    }
}

export function filterUsers(payload: any) {
    return {
        type: FILTER_USERS,
        payload
    }
}

export function createUser(payload: any) {
    // return async function(dispatch){
        // const response = await axios.post('....', payload)
        // return response
    // }
    return {
        type: CREATE_USER,
        payload
    }
}

export function getContacts() {
    return async function (dispatch: (arg0: { type: string; payload: any; }) => any) {
        try {
            const response = await axios.get('contactsMockData.json')
            return dispatch({
                type: GET_CONTACTS,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export function archivedContact(payload: any) {
    return {
        type: ARCHIVED_CONTACT,
        payload
    }
}

export function deleteContact(payload: any) {
    return {
        type: DELETE_CONTACT,
        payload
    }
}

export function filterContacts(payload: any) {
    return {
        type: FILTER_CONTACTS,
        payload
    }
}

export function getRooms() {
    return async function (dispatch: (arg0: { type: string; payload: any; }) => any) {
        try {
            const response = await axios.get('roomsMockData.json')
            return dispatch({
                type: GET_ROOMS,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export function deleteRoom(payload: any) {
    return {
        type: DELETE_ROOM,
        payload
    }
}

export function filterRooms(payload: any) {
    return {
        type: FILTER_ROOMS,
        payload
    }
}

export function createRoom(payload: any) {
    // return async function(dispatch){
        // const response = await axios.post('....', payload)
        // return response
    // }
    return {
        type: CREATE_ROOM,
        payload
    }
}