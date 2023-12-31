import { IMeta, IOrganization } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const ORGANIZATION_URL = "/organization";

export const organizationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addOrganization: build.mutation({
      query: (organizationData) => {
        const formData = new FormData();
        const { profile_picture, ...data } = organizationData;

        formData.append("profile_picture", profile_picture);
        formData.append("data", JSON.stringify(data));
        // console.log(formData);
        return {
          url: `${ORGANIZATION_URL}`,
          method: "POST",
          data: formData,
          contentType: "multipart/form-data",
        };
      },
      invalidatesTags: [tagTypes.organization],
    }),
    getAllOrganization: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${ORGANIZATION_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IOrganization[], meta: IMeta) => {
        return {
          organizations: response,
          meta,
        };
      },
      providesTags: [tagTypes.organization],
    }),
    getSingleOrganization: build.query({
      query: (id) => ({
        url: `${ORGANIZATION_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.organization],
    }),
    updateOrganization: build.mutation({
      query: ({ id, updatedData }) => {
        const formData = new FormData();
        // console.log(id, updatedData);
        const { profile_picture, ...data } = updatedData;

        formData.append("profile_picture", profile_picture);
        formData.append("data", JSON.stringify(data));
        // console.log(formData);
        return {
          url: `${ORGANIZATION_URL}/${id}`,
          method: "PATCH",
          data: formData,
          contentType: "multipart/form-data",
        };
      },
      invalidatesTags: [tagTypes.organization],
    }),
    deleteOrganization: build.mutation({
      query: (id) => ({
        url: `${ORGANIZATION_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.organization],
    }),
  }),
});

export const {
  useAddOrganizationMutation,
  useGetAllOrganizationQuery,
  useGetSingleOrganizationQuery,
  useUpdateOrganizationMutation,
  useDeleteOrganizationMutation,
} = organizationApi;
