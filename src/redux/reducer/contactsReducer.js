import { GET_CONTACTS } from "../actions/constants"

const initialState = {
    contacts: [],
    archived: []
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
            }

        // case FILTER_BOOKINGS:
        //     let filter = []
        //     if(action.payload === 'all'){
        //         filter = state.allBookings
        //     } else {
        //         if(action.payload === 'in'){
        //             filter = state.allBookings.filter(e => e.status === 'Check-In')
        //         } else {
        //             if(action.payload === 'out'){
        //                 filter = state.allBookings.filter(e => e.status === 'Check-Out')
        //             } else {
        //                 filter = state.allBookings.filter(e =>e.status === 'In-Progress')
        //             }
        //         }
        //     }
        //     return {
        //             ...state,
        //             bookings: filter
        //         }
        

        default:
            return state
    }
}
export default contactsReducer