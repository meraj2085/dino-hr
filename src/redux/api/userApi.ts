import { IMeta, IService, IUser } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${USER_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    getMyTeam: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${USER_URL}/my-team`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          myTeam: response,
          meta,
        };
      },
      providesTags: [tagTypes.myTeam],
    }),
    getAdmins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${USER_URL}/getAdmins`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    updateUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getProfile: build.query({
      query: () => ({
        url: `${USER_URL}/my-profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/my-profile`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUserAdmin: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useGetAdminsQuery,
  useUpdateUserAdminMutation,
  useGetMyTeamQuery
} = userApi;
