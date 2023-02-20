import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "../reducer/sidebarReducer";
import bookingsReducer from "../reducer/bookingsReducer";
import userReducer from "../reducer/userReducer";

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    bookings: bookingsReducer,
    users: userReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)