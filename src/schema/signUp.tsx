import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.object().shape({
    firstName: yup.string().required("First name is required").min(2).max(32),
    lastName: yup.string().required("Last name is required").min(2).max(32),
  }),
  email: yup.string().email().required("Email is required"),
  mobileNumber: yup
    .string()
    .required("Mobile number is required")
    .min(10)
    .max(10),
  password: yup.string().min(6).max(32).required("Password is required"),
});
