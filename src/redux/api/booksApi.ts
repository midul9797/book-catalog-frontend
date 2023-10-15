import { baseApi } from "./baseApi";

const BOOK_URL = "/books";
export const booksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    books: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${BOOK_URL}`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: ["books"],
    }),
    book: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BOOK_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["books"],
    }),

    addBook: build.mutation({
      query: (data) => ({
        url: "/books/create-book",
        method: "POST",
        data,
      }),
      invalidatesTags: ["books"],
    }),

    updateBook: build.mutation({
      query: (data) => ({
        url: `${BOOK_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["books"],
    }),

    deleteBook: build.mutation({
      query: (id) => ({
        url: `${BOOK_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    giveReview: build.mutation({
      query: (data) => ({
        url: `${BOOK_URL}/review/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useBookQuery,
  useBooksQuery,
  useLazyBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGiveReviewMutation,
} = booksApi;
