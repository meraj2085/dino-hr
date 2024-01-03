import * as yup from "yup";

export const sendNotificationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("description is required"),
  // sendPush: yup.boolean().required("Send Push is required!"),
  // sendEmail: yup.boolean().required("Send Email is required!"),
  // preference: yup.string().required("preference is required"),
  // department: yup.string().required("department is required"),
  // user_ids: yup.array().required("Employee is required"),
});
