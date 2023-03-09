import { combineReducers } from 'redux';
import { BookingsStoreState, bookingsReducer } from './bookingsReducer';

export interface StoreState {
  bookings: BookingsStoreState
}

export const reducers = combineReducers<StoreState>({
  bookings: bookingsReducer
})






// import { TOGGLE_SIDEBAR } from "../actions/constants"

// const initialState = {
//     sidebar: true
// }

// const rootReducer = (state = initialState, action: { type: any }) => {
//     switch (action.type) {

//         case TOGGLE_SIDEBAR:
//             return {
//                 ...state,
//                 sidebar: !state.sidebar
//             }
        

//         default:
//             return state
//         //break;
//     }
// }
// export default rootReducer

