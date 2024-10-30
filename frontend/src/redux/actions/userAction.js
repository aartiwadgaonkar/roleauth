import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getAuthHeaders = () => {
  const token = JSON.parse(localStorage.getItem("login"));
  return {
    headers: {
      Authorization: token,
    },
  };
};
export const createUser = createAsyncThunk(
  "createUser",
  async (userData, { rejectWithValue, getState }) => {
    console.log(userData, "user");
    try {
      await axios.post("http://localhost:5000/user/add", userData);
      console.log(userData);
    } catch (error) {
      return rejectWithValue(error.message || "something went wrong");
    }
  }
);
export const getUser = createAsyncThunk(
  "getUser",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const result = await axios.get(
        "http://localhost:5000/user",
        getAuthHeaders()
      );
      console.log(result.data.users, "frtdata");
        return result.data.users;
    } catch (error) {
      return rejectWithValue(error.message || "something went wrong");
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (userData, { rejectWithValue, getState }) => {
    try {
      await axios.put(
        `http://localhost:5000/user/update/${userData._id}`,
        userData,getAuthHeaders()
      );
      console.log(userData);
    } catch (error) {
      return rejectWithValue(error.message || "something went wrong");
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue, getState }) => {
    try {
      await axios.delete(`http://localhost:5000/user/delete/${id}`,getAuthHeaders());
    //   console.log(userData);
    } catch (error) {
      return rejectWithValue(error.message || "something went wrong");
    }
  }
);
