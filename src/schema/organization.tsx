import * as yup from "yup";

export const organizationSchema = yup.object().shape({
  company_name: yup.string().required("Company name is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  tin_number: yup.string().required("TIN number is required"),
  bin_number: yup.string().required("BIN number is required"),
  street: yup.string(),
  landmark: yup.string(),
  city: yup.string().required("City is required"),
  postal_code: yup.string().required("Postal code is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  registered_street: yup.string(),
  registered_landmark: yup.string(),
  registered_city: yup.string().required("Registered city is required"),
  registered_postal_code: yup
    .string()
    .required("Registered postal code is required"),
  registered_state: yup.string().required("Registered state is required"),
  registered_country: yup.string().required("Registered country is required"),
  bank_name: yup.string().required("Bank name is required"),
  account_number: yup.string().required("Account number is required"),
  plan_validity: yup.string().required("Plan validity is required"),
  number_of_users: yup.string().required("Number of users is required"),
  routing_number: yup.string(),
  billing_contact_person_first_name: yup
    .string()
    .required("First name is required"),
  billing_contact_person_last_name: yup
    .string()
    .required("Last name is required"),
  billing_contact_person_email: yup
    .string()
    .email("Enter valid email")
    .required("Email is required"),
  billing_contact_person_phone_number: yup
    .string()
    .required("Phone number is required"),
  billing_street: yup.string(),
  billing_landmark: yup.string(),
  billing_city: yup.string(),
  billing_postal_code: yup.string(),
  billing_state: yup.string(),
  billing_country: yup.string(),
  contact_person_first_name: yup.string().required("First name is required"),
  contact_person_last_name: yup.string().required("Last name is required"),
  contact_person_email: yup
    .string()
    .email("Enter valid email")
    .required("Email is required"),
  contact_person_phone_number: yup
    .string()
    .required("Phone number is required"),
  nid_number: yup.string().required("NID number is required"),
  account_manager_first_name: yup.string().required("First name is required"),
  account_manager_last_name: yup.string().required("Last name is required"),
  account_manager_designation: yup.string(),
  account_manager_email: yup.string().email("Enter valid email"),
  account_manager_phone_number: yup.string(),
});
