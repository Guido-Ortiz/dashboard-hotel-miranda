import axios from 'axios';
import { TOGGLE_SIDEBAR, GET_BOOKINGS, FILTER_BOOKINGS, GET_USERS, FILTER_USERS, GET_CONTACTS, ARCHIVED_CONTACT, FILTER_CONTACTS, GET_ROOMS, FILTER_ROOMS } from "./constants";

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

export function getContacts(){
    return async function(dispatch){
        try{
            const response = await axios.get('contactsMockData.json')
            return dispatch({
                type: GET_CONTACTS,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function archivedContact(payload){
    return {
        type: ARCHIVED_CONTACT,
        payload
    }
}

export function filterContacts(payload){
    return {
        type: FILTER_CONTACTS,
        payload
    }
}

export function getRooms(){
    return async function(dispatch){
        try{
            const response = await axios.get('roomsMockData.json')
            return dispatch({
                type: GET_ROOMS,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function filterRooms(payload){
    return {
        type: FILTER_ROOMS,
        payload
    }
}