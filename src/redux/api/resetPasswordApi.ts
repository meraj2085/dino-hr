import { baseApi } from "./baseApi";
const RESET_PASSWORD_URL = "/reset-password";

export const resetPasswordApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sendOtp: build.mutation({
      query: (data) => ({
        url: `${RESET_PASSWORD_URL}/send-otp`,
        method: "POST",
        data, // {office_email}
      }),
    }),
    verifyOtp: build.mutation({
      query: (data) => ({
        url: `${RESET_PASSWORD_URL}/verify-otp`,
        method: "POST",
        data, // {office_email, otp}
      }),
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: `${RESET_PASSWORD_URL}`,
        method: "POST",
        data, // {office_email, password}
      }),
    }),
  }),
});

export const {
  useSendOtpMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = resetPasswordApi;
