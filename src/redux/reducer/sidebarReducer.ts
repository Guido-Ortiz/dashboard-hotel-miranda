import { TOGGLE_SIDEBAR } from "../actions/constants"

const sidebarReducer = (state = true, action: { type: any }) => {
    switch (action.type) {

        case TOGGLE_SIDEBAR:
            return !state
        
        default:
            return state
    }
}
export default sidebarReducer