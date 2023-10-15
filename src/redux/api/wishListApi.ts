import { baseApi } from "./baseApi";

export const wishListApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addToWishList: build.mutation({
      query: (data) => ({
        url: `/wish-list`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["wish-list"],
    }),
    wishList: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/wish-list/${id}`,
        method: "GET",
      }),
      providesTags: ["wish-list"],
    }),
  }),
});

export const {
  useAddToWishListMutation,
  useWishListQuery,
  useLazyWishListQuery,
} = wishListApi;
