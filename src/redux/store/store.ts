import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "../reducer/sidebarReducer";
import { bookingsReducer } from "../reducer/bookingsReducer";
import userReducer from "../reducer/userReducer";
import contactsReducer from "../reducer/contactsReducer";
import roomsReducer from "../reducer/roomsReducer";

const rootReducer = combineReducers({
    bookings: bookingsReducer,

    // sidebar: sidebarReducer,
    // users: userReducer,
    // contacts: contactsReducer,
    // rooms: roomsReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)