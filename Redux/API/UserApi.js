import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/constants/BaseUrl";

export const UserApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // Add the Accept header
      headers.append("Accept", "application/json");
    },
  }),
  endpoints: (builder) => ({
    submitPoll: builder.mutation({
      query: (data) => ({
        url: "/solve",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSubmitPollMutation } = UserApi;
