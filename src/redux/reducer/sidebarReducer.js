import { TOGGLE_SIDEBAR } from "../actions/constants"

// const initialState = {
//     sidebar: true
// }

const sidebarReducer = (state = true, action) => {
    switch (action.type) {

        case TOGGLE_SIDEBAR:
            // return {
            //     ...state,
            //     sidebar: !state.sidebar
            // }
            return !state
        

        default:
            return state
        //break;
    }
}
export default sidebarReducer