// import { tagTypes } from "../tagTypes";
// import { baseApi } from "./baseApi";
// const FEEDBACK_URL = "/feedback";

// export const feedbackApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     addFeedback: build.mutation({
//       query: (feedbackData) => ({
//         url: `${FEEDBACK_URL}/`,
//         method: "POST",
//         data: feedbackData,
//       }),
//       invalidatesTags: [tagTypes.feedback],
//     }),
//   }),
// });

// export const { useAddFeedbackMutation } = feedbackApi;

import { IFeedback, IMeta, IOrganization } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const FEEDBACK_URL = "/feedback";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFeedback: build.mutation({
      query: (feedbackData) => ({
        url: `${FEEDBACK_URL}`,
        method: "POST",
        data: feedbackData,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    getAllFeedback: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${FEEDBACK_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IFeedback[], meta: IMeta) => {
        return {
          feedbacks: response,
          meta,
        };
      },
      providesTags: [tagTypes.feedback],
    }),
    getSingleFeedback: build.query({
      query: (id) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useAddFeedbackMutation,
  useGetAllFeedbackQuery,
  useGetSingleFeedbackQuery,
} = feedbackApi;
