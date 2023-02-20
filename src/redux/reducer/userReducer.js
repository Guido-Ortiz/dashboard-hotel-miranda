import { FILTER_USERS, GET_USERS } from "../actions/constants";

const initialState = {
    users: [],
    allUsers: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                allUsers: action.payload
            }

        case FILTER_USERS:
            let filter = []
            if(action.payload === 'all'){
                filter = state.allUsers
            } else {
                if(action.payload === 'active'){
                    filter = state.allUsers.filter(e => e.status === 'Active')
                } else {
                        filter = state.allUsers.filter(e => e.status === 'Inactive')
                    } 
                }
            
            return {
                    ...state,
                    users: filter
                }
        

        default:
            return state
        }
}
export default userReducer