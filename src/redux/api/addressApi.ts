import { IMeta, IAddress } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const ADDRESS_URL = "/address";

export const addressApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllAddress: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${ADDRESS_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAddress[], meta: IMeta) => {
        return {
          address: response,
          meta,
        };
      },
      providesTags: [tagTypes.address],
    }),
  }),
});

export const { useGetAllAddressQuery } = addressApi;
