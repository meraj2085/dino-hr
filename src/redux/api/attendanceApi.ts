import { IAttendance, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const ATTENDANCE_URL = "/attendance";

export const attendanceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAttendance: build.mutation({
      query: (attendanceData) => ({
        url: `${ATTENDANCE_URL}`,
        method: "POST",
        data: attendanceData,
      }),
      invalidatesTags: [tagTypes.attendance],
    }),
    getAllAttendance: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${ATTENDANCE_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAttendance[], meta: IMeta) => {
        return {
          organizations: response,
          meta,
        };
      },
      providesTags: [tagTypes.attendance],
    }),
    getSingleAttendance: build.query({
      query: (id) => ({
        url: `${ATTENDANCE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.attendance],
    }),
    updateAttendance: build.mutation({
      query: ({ id, data }) => ({
        url: `${ATTENDANCE_URL}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.attendance],
    }),
    deleteAttendance: build.mutation({
      query: (id) => ({
        url: `${ATTENDANCE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.attendance],
    }),
  }),
});

export const {
    useAddAttendanceMutation,
    useGetAllAttendanceQuery,
    useUpdateAttendanceMutation,
    useDeleteAttendanceMutation,
    useGetSingleAttendanceQuery,
} = attendanceApi;
