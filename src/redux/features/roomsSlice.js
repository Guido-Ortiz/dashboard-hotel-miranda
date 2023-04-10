import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from '../../helpers/getData';
import { rooms } from "../../data/rooms";

export const getRooms = createAsyncThunk(
    'rooms/getRooms',
    async () => {
        return await getData(rooms)
    }
)

// export const getUser = createAsyncThunk('user/getUser', async (id) => {
//     return await id
// })

const initialState = {
    rooms: [],
    allRooms: [],
    room: null
}

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        filterRooms: (state, action) => {
            let filter = []
            if (action.payload === 'all') {
                filter = state.allRooms
            } else {
                if (action.payload === 'available') {
                    filter = state.allRooms.filter(e => e.status === 'Available')
                } else {
                    filter = state.allRooms.filter(e => e.status === 'Booked')
                }
            }
            state.rooms = filter
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRooms.fulfilled, (state, action) => {
                state.rooms = action.payload
                state.allRooms = action.payload
            })
            .addCase(getRooms.rejected, () => {
                console.log('Failed to load users')
            })
    }
})

export const { filterRooms } = roomsSlice.actions

export default roomsSlice.reducer