import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from '../helpers/getData';
import { rooms } from "../data/rooms";

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
    // reducers: {
    //     someAction: function() {
   
    //     }
    //  },
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

export default roomsSlice.reducer