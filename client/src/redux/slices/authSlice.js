import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")),
        show: false
    },

    reducers: {
        toggaleSidebar: (state, { payload }) => { state.show = payload }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.continueWithGoogle.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.logout.matchFulfilled, (state, { payload }) => {
            state.user = null
        })

})

export const { toggaleSidebar } = authSlice.actions

export default authSlice.reducer