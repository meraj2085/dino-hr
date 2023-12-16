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
    userAppointments: build.query({
      query: () => ({
        url: `${APPOINTMENT_API}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.appointment],
    }),
    getAllAppointment: build.query({
      query: () => ({
        url: `${APPOINTMENT_API}/getAllAppointment`,
        method: "GET",
      }),
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
    updateAppointmentStatus: build.mutation({
      query: (data) => ({
        url: `${APPOINTMENT_API}/update-status`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.appointment],
    }),
    updateScheduleAndStatus: build.mutation({
      query: (data) => ({
        url: `${APPOINTMENT_API}/updateScheduleAndStatus`,
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
  useUserAppointmentsQuery,
  useUpdateAppointmentStatusMutation,
  useGetAllAppointmentQuery,
  useUpdateScheduleAndStatusMutation
} = appointmentApi;
