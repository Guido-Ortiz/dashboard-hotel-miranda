import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getData } from '../../helpers/getData';
// import { users } from '../../data/users';
import apiFetch from "../../helpers/apiFetch";

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const parameters = {
        url: 'users',
        method: 'GET',
    }
    const users = await apiFetch(parameters)
    return users
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    const parameters = {
        url: `users/${id}`,
        method: 'DELETE'
    }
    return await apiFetch(parameters)
})

export const postUser = createAsyncThunk('users/postUser', async (newUser) => {
    const parameters = {
        url: 'users',
        method: 'POST',
        body: newUser
    }
    return await apiFetch(parameters)
})

const initialState = {
    users: [],
    allUsers: [],
    user: null,
    status: 'Loading'
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
            .addCase(getUsers.pending, (state) => {
                state.status = 'Loading'
            })
            .addCase(getUsers.fulfilled, (state, action) => {

                state.status = 'Fullfilled'
                state.users = action.payload
                state.allUsers = action.payload
            })
            .addCase(getUsers.rejected, (state) => {
                state.status = 'Error'
            })

        builder
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'Fullfilled'
                state.users = state.users.data.filter(e => e._id !== action.payload)
                state.allUsers = state.allUsers.data.filter(e => e._id !== action.payload)
            })

        builder
            .addCase(postUser.fulfilled, (state, action) => {
                state.status = 'Fullfilled'
                state.users.data.push(action.payload)
                state.allUsers.data.push(action.payload)
            })
    }
})

export const { filterUsers } = usersSlice.actions

export default usersSlice.reducer