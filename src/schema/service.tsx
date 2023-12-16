import * as yup from "yup";

export const serviceSchema = yup.object().shape({
  name: yup.string().required("Service name is required").min(2).max(100),
  price: yup.number().required("Price is required").min(0),
  category_id: yup.string(),
  description: yup
    .string()
    .required("Description is required")
    .min(2)
    .max(1000),
});
