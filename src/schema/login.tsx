import * as yup from "yup";

export const loginSchema = yup.object().shape({
  office_email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
});
