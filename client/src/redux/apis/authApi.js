import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            continueWithGoogle: builder.mutation({
                query: userData => {
                    return {
                        url: `/continue-with-google`,
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                }
            }),
            logout: builder.mutation({
                query: userData => {
                    return {
                        url: `/logout`,
                        method: "POST",
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    return data.result
                }
            }),

        }
    }
})

export const { useContinueWithGoogleMutation, useLogoutMutation } = authApi
