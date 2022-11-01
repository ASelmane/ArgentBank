import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        connected : false,
        token : ""
    },
    reducers : {
        getLogged : (state, action) => {
            state.connected = true 
            state.token = action.payload
            localStorage.setItem("token", action.payload)
        },
        getLoggedOut : (state) => {
            state.connected = false
            state.token = ""
            localStorage.removeItem("token")
        },
    }
})

export const {getLogged, getLoggedOut } = loginSlice.actions
export default loginSlice.reducer