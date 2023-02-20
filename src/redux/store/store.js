import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "../reducer/sidebarReducer";
import bookingsReducer from "../reducer/bookingsReducer";

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    bookings: bookingsReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)