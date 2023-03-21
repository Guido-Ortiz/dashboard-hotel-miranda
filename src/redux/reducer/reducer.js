import { TOGGLE_SIDEBAR } from "../actions/constants"

const initialState = {
    sidebar: true
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebar: !state.sidebar
            }
        
        default:
            return state
    }
}
export default rootReducer