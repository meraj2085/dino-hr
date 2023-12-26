import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const EMPLOYEE_URL = "/user";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addEmployee: build.mutation({
      query: (employeeData) => ({
        url: `${EMPLOYEE_URL}`,
        method: "POST",
        data: employeeData,
      }),
      invalidatesTags: [tagTypes.employee],
    }),
  }),
});

export const { useAddEmployeeMutation } = employeeApi;
