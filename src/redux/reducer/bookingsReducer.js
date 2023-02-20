// import { TOGGLE_SIDEBAR } from "../actions/constants"

import { GET_BOOKINGS } from "../actions/constants"

const initialState = {
    bookings: [],
    allBookings: []
}

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_BOOKINGS:
            return {
                ...state,
                bookings: action.payload,
                allBookings: action.payload
            }
        

        default:
            return state
    }
}
export default bookingsReducer