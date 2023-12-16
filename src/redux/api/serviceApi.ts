import { IMeta, IService } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const SERVICE_URL = "/service";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    services: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: SERVICE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),
    categoryServices: build.query({
      query: (arg: { id: string, params: Record<string, any> }) => {
        return {
          url: `${SERVICE_URL}/getServicesByCategory/${arg.id}`,
          method: "GET",
          params: arg.params,
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),
    singleService: build.query({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
    addService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    upcomingServices: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${SERVICE_URL}/getAllUpcomingServices`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          upcomingServices: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useServicesQuery,
  useCategoryServicesQuery,
  useSingleServiceQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useUpcomingServicesQuery,
} = serviceApi;
