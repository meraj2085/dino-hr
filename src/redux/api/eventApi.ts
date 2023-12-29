import { IEvent, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const EVENT_URL = "/event";

export const eventApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addEvent: build.mutation({
      query: (eventData) => ({
        url: `${EVENT_URL}`,
        method: "POST",
        data: eventData,
      }),
      invalidatesTags: [tagTypes.event],
    }),
    getAllEvent: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${EVENT_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IEvent[], meta: IMeta) => {
        return {
          events: response,
          meta,
        };
      },
      providesTags: [tagTypes.event],
    }),
    getSingleEvent: build.query({
      query: (id) => ({
        url: `${EVENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.event],
    }),
    updateEvent: build.mutation({
      query: (data) => ({
        url: `${EVENT_URL}/${data?.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.event],
    }),
    deleteEvent: build.mutation({
      query: (id) => ({
        url: `${EVENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.event],
    }),
  }),
});

export const {
  useAddEventMutation,
  useGetAllEventQuery,
  useGetSingleEventQuery,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventApi;
