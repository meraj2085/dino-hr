import { IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const EMPLOYEE_URL = "/user";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addEmployee: build.mutation({
      query: (employeeData) => {
        const formData = new FormData();
        const { profile_picture, ...data } = employeeData;

        formData.append("profile_picture", profile_picture);
        formData.append("data", JSON.stringify(data));
        return {
          url: `${EMPLOYEE_URL}`,
          method: "POST",
          data: formData,
          contentType: "multipart/form-data",
        };
      },
      invalidatesTags: [tagTypes.employee],
    }),
    getAllEmployee: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${EMPLOYEE_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response, meta: IMeta) => {
        return {
          employees: response,
          meta,
        };
      },
      providesTags: [tagTypes.employee],
    }),
    getSingleEmployee: build.query({
      query: (id) => ({
        url: `${EMPLOYEE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.employee],
    }),
  }),
});

export const {
  useAddEmployeeMutation,
  useGetAllEmployeeQuery,
  useGetSingleEmployeeQuery,
} = employeeApi;
