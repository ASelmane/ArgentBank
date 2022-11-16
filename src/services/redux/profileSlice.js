import { createSlice } from "@reduxjs/toolkit"

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        createdAt: "",
        updatedAt: ""
    },
    reducers : {
        getInfoProfile : (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
            localStorage.setItem("firstName", action.payload.firstName)
        },
        updateInfoProfile: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.updatedAt = action.payload.updatedAt
            localStorage.setItem("firstName", action.payload.firstName)
        },
        cleanInfoProfile : (state) => {
            state.id = ""
            state.email = ""
            state.firstName = ""
            state.lastName = ""
            state.createdAt = ""
            state.updatedAt = ""
            localStorage.removeItem("firstName")
        }
    }
})
export const {getInfoProfile, updateInfoProfile, cleanInfoProfile } = profileSlice.actions
export default profileSlice.reducer 