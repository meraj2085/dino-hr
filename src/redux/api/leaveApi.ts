import { IAppointment, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const LEAVE_API = "/leave";

export const leaveApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    singleLeave: build.query({
      query: (id) => ({
        url: `${LEAVE_API}/view/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.leave],
    }),
    getAllLeaves: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${LEAVE_API}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAppointment[], meta: IMeta) => {
        return {
          leaves: response,
          meta,
        };
      },
      providesTags: [tagTypes.leave],
    }),
    addLeave: build.mutation({
      query: (data) => ({
        url: `${LEAVE_API}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.leave],
    }),
    updateLeave: build.mutation({
      query: (data) => ({
        url: `${LEAVE_API}/update/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.leave],
    }),

    leavesByEmail: build.query({
      query: (userId: string | string[] | undefined) => ({
        url: `${LEAVE_API}?user_id=${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.leave],
    }),
  }),
});

export const {
  useAddLeaveMutation,
  useGetAllLeavesQuery,
  useSingleLeaveQuery,
  useUpdateLeaveMutation,
  useLeavesByEmailQuery,
} = leaveApi;
