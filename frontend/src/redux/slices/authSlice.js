import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authAction";

const authSlice= createSlice({
    name: "authSlice",
    initialState: { 
        
    },
    reducers: { 
        logout : (state, {payload}) => {
                localStorage.removeItem("login")
                state.user = null              
           
        }
    },
    extraReducers: builder => builder
        .addCase(loginUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(loginUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.user = payload
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

    
       
})

export const { logout } = authSlice.actions
export default authSlice.reducer