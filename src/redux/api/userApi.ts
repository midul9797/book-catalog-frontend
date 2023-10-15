import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "/users/create-user",
        method: "POST",
        data,
      }),
      invalidatesTags: ["user"],
    }),
    getUser: build.query({
      query: (id: string | undefined) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useCreateUserMutation,

  useGetUserQuery,
} = userApi;
