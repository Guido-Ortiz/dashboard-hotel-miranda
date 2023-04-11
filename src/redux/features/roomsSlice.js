import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from '../../helpers/getData';
import { rooms } from "../../data/rooms";
import apiFetch from "../../helpers/apiFetch";

export const getRooms = createAsyncThunk('rooms/getRooms', async () => {
    const parameters = {
        url: 'rooms',
        method: 'GET'
    }
    return await apiFetch(parameters)
})

// export const getUser = createAsyncThunk('user/getUser', async (id) => {
//     return await id
// })

const initialState = {
    rooms: [],
    allRooms: [],
    room: null,
    status: 'Loading'
}

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        filterRooms: (state, action) => {
            let filter = []
            if (action.payload === 'all') {
                filter = state.allRooms.data
            } else {
                if (action.payload === 'available') {
                    filter = state.allRooms.data.filter(e => e.status === 'Available')
                } else {
                    filter = state.allRooms.data.filter(e => e.status === 'Booked')
                }
            }
            state.rooms.data = filter
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRooms.pending, (state) => {
                state.status = 'Loading'
            })
            .addCase(getRooms.fulfilled, (state, action) => {
                state.status = 'Fullfilled'
                state.rooms = action.payload
                state.allRooms = action.payload
            })
            .addCase(getRooms.rejected, (state) => {
                state.status = 'Error'
                console.log('Failed to load rooms')
            })
    }
})

export const { filterRooms } = roomsSlice.actions

export default roomsSlice.reducer