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
            localStorage.setItem("date", new Date())
        },
        getLoggedOut : (state) => {
            state.connected = false
            state.token = ""
            state.date = ""
            localStorage.removeItem("token")
            localStorage.removeItem("date")
            localStorage.removeItem("firstName")
        },
        stayLogged : (state) => {
            state.connected = true
            state.token = localStorage.getItem("token")
            state.date = localStorage.setItem("date", new Date())
        }
    }
})

export const {getLogged, getLoggedOut, stayLogged } = loginSlice.actions
export default loginSlice.reducer