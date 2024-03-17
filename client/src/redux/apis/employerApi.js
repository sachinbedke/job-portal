import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const employerApi = createApi({
    reducerPath: "employerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/employer`,
        credentials: "include"
    }),
    tagTypes: ["employer", "job", "applicant"],
    endpoints: (builder) => {
        return {
            addEmployer: builder.mutation({
                query: (empData) => {
                    return {
                        url: `/update/${empData.id}`,
                        method: "PUT",
                        body: empData.fd
                    }
                },
                providesTags: ["employer"]
            }),
            getEmployerDetails: builder.query({
                query: id => {
                    return {
                        url: `/employer-details/${id}`,
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                // providesTags: ["employer"]
            }),
            getEmployerJobs: builder.query({
                query: (empData) => {
                    return {
                        url: `/jobs`,
                        method: "GET",
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["employer"]
            }),
            getJobApplicants: builder.query({
                query: id => {
                    return {
                        url: `/applicant/${id}`,
                        method: "GET",
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["applicant"]
            }),
            getJobApplicantsResume: builder.query({
                query: id => {
                    return {
                        url: `/applicant-resume/${id}`,
                        method: "GET",

                    }
                },
                transformResponse: data => data.result,
                providesTags: ["employer"]
            }),
            addEmployerJob: builder.mutation({
                query: (jobData) => {
                    return {
                        url: `/add-job`,
                        method: "POST",
                        body: jobData
                    }
                },
                invalidatesTags: ["job"]
            }),
            updateEmployerJob: builder.mutation({
                query: (empData) => {
                    return {
                        url: `/update-job/${empData._id}`,
                        method: "PUT",
                        body: empData
                    }
                },
                invalidatesTags: ["job"]
            }),
            updateStatus: builder.mutation({
                query: (jobData) => {
                    return {
                        url: `/update-status/${jobData._id}`,
                        method: "PUT",
                        body: jobData
                    }
                },
                invalidatesTags: ["applicant"]
            }),
            deleteEmployerJob: builder.mutation({
                query: (empData) => {
                    return {
                        url: `/delete-job/${empData._id}`,
                        method: "DELETE",

                    }
                },
                invalidatesTags: ["job"]
            }),


        }
    }
})

export const {
    useLazyGetJobApplicantsQuery,
    useLazyGetJobApplicantsResumeQuery,
    useAddEmployerMutation, useGetEmployerDetailsQuery,

    useAddEmployerJobMutation, useGetEmployerJobsQuery,
    useUpdateEmployerJobMutation, useDeleteEmployerJobMutation,
    useUpdateStatusMutation } = employerApi
