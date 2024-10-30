// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./slices/authSlice";
// import patientSlice from "./slices/patientSlice";
// import adminSlice from "./slices/adminSlice";

import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import userSlice from "./slices/userSlice"

const reduxStore = configureStore({
    reducer: {
        auth : authSlice,
        user : userSlice,
    },
})

export default reduxStore