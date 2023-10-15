import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: () => ({}),
  tagTypes: ["user", "books", "wish-list"],
});
