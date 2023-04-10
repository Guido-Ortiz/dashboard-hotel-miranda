import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getData } from '../../helpers/getData';
// import { users } from '../../data/users';
import apiFetch from "../../helpers/apiFetch";

export const getUsers = createAsyncThunk('users/getUsers', async () => {
        return await apiFetch('users', 'GET', null)
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
    reducers: {
        filterUsers: (state, action) => {
            let filter = []
            if (action.payload === 'All') {
                filter = state.allUsers.data
            } else {
                if (action.payload === 'Active') {
                    filter = state.allUsers.data.filter(e => e.userstatus === 'Active')
                } else {
                    filter = state.allUsers.data.filter(e => e.userstatus === 'Inactive')
                }
            }
            state.users.data = filter
        }
     },
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

export const { filterUsers } = usersSlice.actions

export default usersSlice.reducer