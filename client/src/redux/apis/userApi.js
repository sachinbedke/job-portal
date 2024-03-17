import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/user", credentials: "include" }),
    tagTypes: ["resume", "apply"],
    endpoints: (builder) => {
        return {
            getUserResume: builder.query({
                query: (id) => {
                    return {
                        url: "/resume",
                        method: "GET",
                    }
                },
                providesTags: ["resume"],
                transformResponse: data => data.result
            }),

            addUserResume: builder.mutation({
                query: (resumeData) => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: resumeData
                    }
                },
                invalidatesTags: ["resume"]
            }),

            deleteUserResume: builder.mutation({
                query: (id) => {
                    return {
                        url: `/delete/${id}`,
                        method: "DELETE"
                    }
                },
                invalidatesTags: ["resume"]
            }),

            updateUserResume: builder.mutation({
                query: (resumeData, x) => {
                    return {
                        url: `/update/${resumeData._id}`,
                        method: "PUT",
                        body: resumeData
                    }
                },
                invalidatesTags: ["resume"]
            }),
            downloadResume: builder.query({
                query: (resumeData, x) => {
                    return {
                        url: `/genrate-resume`,
                        method: "GET",
                    }
                },
                invalidatesTags: ["resume"]
            }),
            applyJob: builder.mutation({
                query: (jobId) => {
                    return {
                        url: `/apply-job`,
                        method: "POST",
                        body: { jobId }
                    }
                },
                invalidatesTags: ["apply"]
            }),
            isAppliyed: builder.query({
                query: (jobId) => {
                    return {
                        url: `/is-applied`,
                        method: "GET",
                        params: { jobId }
                    }
                },
                providesTags: ["apply"]
            }),
            history: builder.query({
                query: () => {
                    return {
                        url: `/history`,
                        method: "GET",

                    }
                },
                transformResponse: data => data.result
            }),
        }
    }
})

export const {
    useHistoryQuery,
    useGetUserResumeQuery,
    useAddUserResumeMutation,
    useUpdateUserResumeMutation,
    useDeleteUserResumeMutation,
    useLazyDownloadResumeQuery,
    useApplyJobMutation,
    useIsAppliyedQuery

} = userApi