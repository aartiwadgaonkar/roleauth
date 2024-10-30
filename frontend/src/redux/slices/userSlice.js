
import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, getUser, updateUser } from "../actions/userAction";

const userSlice= createSlice({
    name: "userSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(createUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(createUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.addUser = true
        })
        .addCase(createUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(updateUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userUpdate = true
        })
        .addCase(updateUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userDelete = true
        })
        .addCase(deleteUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userdata = payload
        })
        .addCase(getUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
       
})

export const { invalidate } = userSlice.actions
export default userSlice.reducer