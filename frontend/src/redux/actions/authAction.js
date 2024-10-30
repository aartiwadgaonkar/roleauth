import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const loginUser= createAsyncThunk(
    "loginUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
        const { data } = await axios.post("http://localhost:5000/auth/login",  userData)
        console.log(data,"logindata");
        
        if (data.length === 0) {
            return rejectWithValue("invalid email or password")
        } 
        localStorage.setItem("login",JSON.stringify(data.token))
           
        return data
      
     } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })