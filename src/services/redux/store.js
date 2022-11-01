import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import profileSlice from "./profileSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        profile: profileSlice
    }
});