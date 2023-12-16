import * as yup from "yup";

export const blogSchema = yup.object().shape({
  title: yup.string().required("Title is required").min(2).max(500),
  description: yup
    .string()
    .required("Description is required")
    .min(2)
    .max(5000),
  views: yup.number().required("Views is required"),
});
