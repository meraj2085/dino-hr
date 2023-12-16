import { IMeta, INews } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const NEWS_URL = "/news";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllNews: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: NEWS_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: INews[], meta: IMeta) => {
        return {
          blogs: response,
          meta,
        };
      },
      providesTags: [tagTypes.news],
    }),
    addNews: build.mutation({
      query: (data) => ({
        url: `${NEWS_URL}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.news],
    }),
  }),
});

export const { useGetAllNewsQuery, useAddNewsMutation } = newsApi;
