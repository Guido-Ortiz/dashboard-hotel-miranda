import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from '../helpers/getData';
import { users } from '../data/users';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        return await getData(users)
    }
)

// export const getUser = createAsyncThunk('user/getUser', async (id) => {
//     return await id
// })

const initialState = {
    users: [],
    allUsers: [],
    user: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    // reducers: {
    //     someAction: function() {
   
    //     }
    //  },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
                state.allUsers = action.payload
            })
            .addCase(getUsers.rejected, () => {
                console.log('Failed to load users')
            })
    }
})

export default usersSlice.reducer