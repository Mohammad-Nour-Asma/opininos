import { baseUrl } from "@/constants/BaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import jsCookie from "js-cookie";

export const PollApi = createApi({
  reducerPath: "pollApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.append("Accept", "application/json");
      if (jsCookie.get("token")) {
        headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getPullUsers: builder.query({
      query: (id) => ({
        url: "solve/" + id,
      }),
    }),
    getPolls: builder.query({
      query: () => ({
        url: "poll/",
      }),
      providesTags: (result, error, arg) => [{ id: "polls", type: "polls" }],
    }),

    addPoll: builder.mutation({
      query: (data) => ({
        url: "poll",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "polls", id: "polls" }],
    }),

    deletePoll: builder.mutation({
      query: (id) => ({
        url: "poll/" + id,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "polls", id: "polls" }],
    }),
  }),
});

export const {
  useGetPullUsersQuery,
  useAddPollMutation,
  useGetPollsQuery,
  useDeletePollMutation,
} = PollApi;
