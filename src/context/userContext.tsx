import { createContext, useContext, useEffect, useReducer} from "react";
import { EDIT_EMAIL, EDIT_USERNAME, LOGIN, LOGOUT } from "./constants";

const KEY_LOCALSTORAGE = 'admin';

export const UserContext = createContext(null);

export const useUser = () => {
    return useContext(UserContext);
}

const initialState = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)) || { logged: false, email: "", username: "" }

const reducer = (state: any,action: { type: any; value: { email: any; username: any; }; })=> {

    switch(action.type){
        case LOGIN:
            return { 
                logged: true, 
                email: action.value.email, 
                username: action.value.username
            }
        case EDIT_USERNAME:
            return {
                ...state, 
                username: action.value
            }
        case EDIT_EMAIL:
            return {
                ...state, 
                email: action.value
            }
        case LOGOUT:
            return{
                logged: false, 
                email:'', username:''
            }

        default:
            return state    
    }
}

export const UserProvider = ({ children }) => {

    const [user, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem( KEY_LOCALSTORAGE, JSON.stringify(user))
    }, [user])


    return (
        <UserContext.Provider value={{user, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}