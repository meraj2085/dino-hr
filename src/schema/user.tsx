import * as yup from "yup";

export const userSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  date_of_birth: yup.string().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  phone_number: yup.string().required("Phone number is required"),
  other_phone_number: yup.string(),
  office_email: yup.string().required("Office email is required"),
  personal_email: yup.string(),
  flat_number: yup.string(),
  building_name: yup.string(),
  street: yup.string(),
  city: yup.string(),
  landmark: yup.string(),
  country: yup.string(),
  state: yup.string(),
  postal_code: yup.string(),
  emergency_contact: yup
    .object()
    .shape({
      full_name: yup.string().required("Full name is required"),
      phone_number: yup.string().required("Phone number is required"),
      email: yup.string(),
      relationship: yup.string().required("Relationship is required"),
    })
    .nullable()
    .required("This field is required."),
  employment_status: yup.string().required("Employment status is required"),
  date_of_joining: yup.string().required("Date of joining is required"),
  department: yup.string().required("Department is required"),
  designation: yup.string().required("Designation is required"),
  team: yup.string().required("Team is required"),
  role: yup.string().required("Role is required"),
  manager_id: yup.string().required("Manager is required"),
  contract_date: yup.string().required("Contract date is required"),
  bank_name: yup.string().required("Bank name is required"),
  account_number: yup.string().required("Account number is required"),
  branch_name: yup.string().required("Branch name is required"),
  salaryDetails: yup.object().shape({
    basic_salary: yup.string().required("Basic salary is required"),
    total_allowance: yup.string().required("Total allowances is required"),
    annual_bonus: yup.string().required("Annual bonus is required"),
  })
  .nullable()
  .required("This field is required."),
});
