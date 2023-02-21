import { DELETE_BOOKING, FILTER_BOOKINGS, GET_BOOKINGS, GET_BOOKING_DETAIL } from "../actions/constants";

const initialState = {
    bookings: [],
    allBookings: [],
    detail: {}
}

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_BOOKINGS:
            return {
                ...state,
                bookings: action.payload,
                allBookings: action.payload
            }

        case DELETE_BOOKING:
            return {
                ...state,
                bookings: state.bookings.filter(b => b.id !== action.payload),
                allBookings: state.bookings.filter(b => b.id !== action.payload)
            }

        case FILTER_BOOKINGS:
            let filter = []
            if(action.payload === 'all'){
                filter = state.allBookings
            } else {
                if(action.payload === 'in'){
                    filter = state.allBookings.filter(e => e.status === 'Check-In')
                } else {
                    if(action.payload === 'out'){
                        filter = state.allBookings.filter(e => e.status === 'Check-Out')
                    } else {
                        filter = state.allBookings.filter(e =>e.status === 'In-Progress')
                    }
                }
            }
            return {
                    ...state,
                    bookings: filter
                }

            case GET_BOOKING_DETAIL:
                console.log(action.payload)
                let detail = state.allBookings.filter(b => b.id === parseInt(action.payload))
                // console.log(detail) 
            return {
                ...state,
                detail: detail
            }
        

        default:
            return state
    }
}
export default bookingsReducer