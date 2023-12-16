import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const REVIEW_URL = "/review";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query({
      query: (id) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    addReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi;
