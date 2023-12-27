
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const NOTIFICATION_URL = "/notification";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addNotification: build.mutation({
      query: (notificationApiData) => ({
        url: `${NOTIFICATION_URL}`,
        method: "POST",
        data: notificationApiData,
      }),
      invalidatesTags: [tagTypes.notification],
    })
  }),
});

export const {
  useAddNotificationMutation
} = notificationApi;
