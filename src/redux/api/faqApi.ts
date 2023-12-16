import { IFaq, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const FAQ_URL = "/faq";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFaq: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: FAQ_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IFaq[], meta: IMeta) => {
        return {
          faq: response,
          meta,
        };
      },
      providesTags: [tagTypes.faq],
    }),
    getSingleFaq: build.query({
      query: (id) => ({
        url: `${FAQ_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    addFaq: build.mutation({
      query: (data) => ({
        url: `${FAQ_URL}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    updateFaq: build.mutation({
      query: (data) => ({
        url: `${FAQ_URL}/${data.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    deleteFaq: build.mutation({
      query: (id) => ({
        url: `${FAQ_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useGetAllFaqQuery,
  useGetSingleFaqQuery,
  useAddFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} = faqApi;
