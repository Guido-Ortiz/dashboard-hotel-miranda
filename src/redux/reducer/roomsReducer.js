import { FILTER_ROOMS, GET_ROOMS } from "../actions/constants"


const initialState = {
    rooms: [],
    allRooms: []
}

const roomsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ROOMS:
            return {
                ...state,
                rooms: action.payload,
                allRooms: action.payload
            }

        case FILTER_ROOMS:
            let filter = []
            if(action.payload === 'all'){
                filter = state.allRooms
            } else {
                if(action.payload === 'available'){
                    filter = state.allRooms.filter(e => e.status === 'Available')
                } else {
                        filter = state.allRooms.filter(e => e.status === 'Booked')                  
                }
            }
            return {
                    ...state,
                    rooms: filter
                }


        default:
            return state
    }
}
export default roomsReducer