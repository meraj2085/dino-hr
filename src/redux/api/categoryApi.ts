import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const CATEGORY_URL = "/category";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
      query: () => ({
        url: CATEGORY_URL,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    addCategory: build.mutation({
      query: (data) => ({
        url: CATEGORY_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    updateCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/${data.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
