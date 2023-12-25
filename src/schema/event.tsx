import * as yup from "yup";

export const eventSchema = yup.object().shape({
  //   from_date: yup.date().required("From Date is required"),
  //   to_date: yup.date().required("To Date is required"),
  title: yup.string().required("Title is required!"),
  type: yup.string().required("Type is required!"),
});
