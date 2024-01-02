import { IMeta, INotification } from "@/types";
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
    }),

    getNotifications: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${NOTIFICATION_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: INotification[], meta: IMeta) => {
        return {
          notifications: response,
          meta,
        };
      },
      providesTags: [tagTypes.notification],
    }),
    getUnreadCount: build.query({
      query: () => ({
        url: `${NOTIFICATION_URL}/getUnreadCount`,
        method: "GET",
      }),
      providesTags: [tagTypes.notification],
    }),
    deleteNotification: build.mutation({
      query: () => ({
        url: `${NOTIFICATION_URL}/`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.notification],
    }),
  }),
});

export const {
  useAddNotificationMutation,
  useGetNotificationsQuery,
  useGetUnreadCountQuery,
  useDeleteNotificationMutation,
} = notificationApi;
