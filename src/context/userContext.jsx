import { createContext, useContext, useEffect, useReducer } from "react";
import { EDIT_EMAIL, EDIT_USERNAME, LOGIN, LOGOUT } from "./constants";

export const UserContext = createContext(null);

export const useUser = () => {
    return useContext(UserContext);
}

// const initialState = JSON.parse(localStorage.getItem('admin')) || { logged: false, admin: { email: "", username: "" } }

// const reducer = (state, action)=> {

//     switch(action.type){
//         case LOGIN:
//             return {

//                 // ...state,
//                 logged: true,
//                 admin: action.payload,

//             }
//         case EDIT_USERNAME:
//             return {
//                 ...state,
//                 username: action.value
//             }
//         case EDIT_EMAIL:
//             return {
//                 ...state,
//                 email: action.value
//             }
//         case LOGOUT:
//             return{
//                 logged: false,
//                 admin: null
//             }

//         default:
//             return state
//     }
// }

const reducer = (state, action) => {

    switch (action.type) {
        case LOGIN:
            localStorage.setItem('admin', JSON.stringify(action.value))
            return {

                // ...state,
                logged: true,
                email: action.value.email,
                token: action.value.token
            }
        // case EDIT_USERNAME:
        //     return {
        //         ...state,
        //         username: action.value
        //     }
        // case EDIT_EMAIL:
        //     return {
        //         ...state,
        //         email: action.value
        //     }
        case LOGOUT:
            return {
                logged: false,
                email: '',
                token: ''
            }

        default:
            return {
                logged: false,
                email: '',
                token: ''
            }
    }
}

export const UserProvider = ({ children }) => {

    

    const initialState = JSON.parse(localStorage.getItem('admin')) 

    const [user, dispatch] = useReducer(reducer, initialState)

    // useEffect(() => {
    //     localStorage.setItem('admin', JSON.stringify(user))
    // }, [user])


    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}