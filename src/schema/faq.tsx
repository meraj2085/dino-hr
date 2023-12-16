import * as yup from "yup";

export const faqSchema = yup.object().shape({
  question: yup.string().required("Question is required").min(2).max(500),
  answer: yup.string().required("Answer is required").min(2).max(1000),
});
