import { CREATE_USER, DELETE_USER, FILTER_USERS, GET_USERS } from "../actions/constants";

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

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(u => u.id !== action.payload),
                allUsers: state.users.filter(u => u.id !== action.payload)
            }

        case FILTER_USERS:
            let filter = []
            if (action.payload === 'all') {
                filter = state.allUsers
            } else {
                if (action.payload === 'active') {
                    filter = state.allUsers.filter(e => e.status === 'Active')
                } else {
                    filter = state.allUsers.filter(e => e.status === 'Inactive')
                }
            }
            return {
                ...state,
                users: filter
            }

        case CREATE_USER:
            // return{
            //     ...state
            // }
            return {
                ...state,
                users: [...state.users, action.payload],
                allUsers: [...state.allUsers, action.payload]
            }


        default:
            return state
    }
}
export default userReducer