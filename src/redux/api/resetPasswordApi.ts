import { baseApi } from "./baseApi";
const OTP_URL = "/otp";

export const resetPasswordApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sendOtp: build.mutation({
      query: (data) => ({
        url: `${OTP_URL}/send-otp`,
        method: "POST",
        data, // {office_email}
      }),
    }),
    verifyOtp: build.mutation({
      query: (data) => ({
        url: `${OTP_URL}/verify-otp`,
        method: "POST",
        data, // {office_email, otp}
      }),
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: `${OTP_URL}/reset-password`,
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
