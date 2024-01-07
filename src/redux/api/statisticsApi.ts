import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const STATISTICS_URL = "/statistics";

export const statisticsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSuperAdminStats: build.query({
      query: () => ({
        url: `${STATISTICS_URL}/superAdmin`,
        method: "GET",
      }),
      providesTags: [tagTypes.statistics],
    }),
    getAdminStats: build.query({
      query: () => ({
        url: `${STATISTICS_URL}/admin`,
        method: "GET",
      }),
      providesTags: [tagTypes.statistics],
    }),
    getEmployeeStats: build.query({
      query: () => ({
        url: `${STATISTICS_URL}/employee`,
        method: "GET",
      }),
      providesTags: [tagTypes.statistics],
    }),
  }),
});

export const {
  useGetSuperAdminStatsQuery,
  useGetAdminStatsQuery,
  useGetEmployeeStatsQuery,
} = statisticsApi;
