import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const FEEDBACK_URL = "/feedback";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFeedback: build.mutation({
      query: (feedbackData) => ({
        url: `${FEEDBACK_URL}/`,
        method: "POST",
        data: feedbackData,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
  }),
});

export const { useAddFeedbackMutation } = feedbackApi;
