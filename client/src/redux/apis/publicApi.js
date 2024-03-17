import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const publicApi = createApi({
    reducerPath: "publicApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/public`,
        credentials: "include"
    }),
    tagTypes: ["jobs"],
    endpoints: (builder) => {
        return {
            publicjob: builder.query({
                query: ({ page, limit }) => {
                    return {
                        url: "/all-jobs",
                        method: "GET",
                        params: {
                            limit,
                            page
                        }
                    }
                },
                // transformResponse: data => data.result,
                providesTags: ["jobs"]
            }),
            publicDetails: builder.query({
                query: id => {
                    return {
                        url: `/job-detail/${id}`,
                        method: "GET",

                    }
                },
                transformResponse: data => data.result,
                invalidatesTags: ["tagName"]
            }),

        }
    }
})

export const { usePublicjobQuery, useLazyPublicjobQuery, usePublicDetailsQuery } = publicApi
