import { IAppointment, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const APPOINTMENT_API = "/appointment";

export const appointmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    singleAppointment: build.query({
      query: (id) => ({
        url: `${APPOINTMENT_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.appointment],
    }),
    getAllAppointment: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${APPOINTMENT_API}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAppointment[], meta: IMeta) => {
        return {
          appointments: response,
          meta,
        };
      },
      providesTags: [tagTypes.appointment],
    }),
    addAppointment: build.mutation({
      query: (data) => ({
        url: `${APPOINTMENT_API}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.appointment],
    }),
    updateScheduleAndStatus: build.mutation({
      query: (data) => ({
        url: `${APPOINTMENT_API}/`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.appointment],
    }),
  }),
});

export const {
  useAddAppointmentMutation,
  useSingleAppointmentQuery,
  useGetAllAppointmentQuery,
  useUpdateScheduleAndStatusMutation,
} = appointmentApi;
