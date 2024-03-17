import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";
import { employerApi } from "./apis/employerApi";
import { publicApi } from "./apis/publicApi";
import { userApi } from "./apis/userApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [employerApi.reducerPath]: employerApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, employerApi.middleware, publicApi.middleware, userApi.middleware]
})

export default reduxStore