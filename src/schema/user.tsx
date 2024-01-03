import * as yup from "yup";

export const userSchema = yup.object().shape({
  organization_id: yup.string().required("Organization is Required"),
  first_name: yup.string().required("First Name is Required"),
  last_name: yup.string().required("Last Name is Required"),
  date_of_birth: yup.string().required("Date Of Birth is Required"),
  gender: yup.string().required("Gender is Required"),
  employment_status: yup
    .mixed()
    .oneOf(["Contract", "Intern", "Temporary", "Part-time", "Freelance"])
    .required("Employment Status is Required"),
  office_email: yup
    .string()
    .required("Office Email is Required")
    .email("Invalid Email"),

  date_of_joining: yup.string().required("Date Of Joining is Required"),
  department: yup
    .mixed()
    .oneOf(["HR", "IT", "Finance", "Marketing", "Sales", "Operations"])
    .required("Department is Required"),
  flat_number: yup.string().required("Flat Number is Required"),
  building_name: yup.string().required("Building Name is Required"),
  street: yup.string().required("Street is Required"),
  city: yup.string().required("City is Required"),
  landmark: yup.string().required("Landmark is Required"),
  country: yup.string().required("Country is Required"),
  state: yup.string().required("State is Required"),
  postal_code: yup.string().required("PostalCode is Required"),
  phone_number: yup.string().required("PhoneNumber is Required"),
  other_phone_number: yup.string().required("Other Phone Number is Required"),
  personal_email: yup
    .string()
    .required("Personal Email is Required")
    .email("Invalid Email"),
  bank_name: yup.string().required("Bank Name is Required"),
  account_number: yup.string().required("Account Number is Required"),
  branch_name: yup.string().required("Branch Name is Required"),
  designation: yup
    .mixed()
    .oneOf([
      "Software Engineer",
      "Senior Software Engineer",
      "Team Lead",
      "Project Manager",
      "Product Manager",
      "CEO",
      "CTO",
      "COO",
      "CFO",
      "HR Manager",
      "HR Executive",
      "HR Intern",
      "Marketing Manager",
      "Marketing Executive",
      "Marketing Intern",
      "Sales Manager",
      "Sales Executive",
      "Sales Intern",
      "Finance Manager",
      "Finance Executive",
      "Finance Intern",
      "Operations Manager",
      "Operations Executive",
      "Operations Intern",
    ])
    .required("Designation is Required"),
  team: yup
    .mixed()
    .oneOf(["IT", "Finance", "Marketing", "Sales", "Operations"])
    .required("Team is Required"),
  role: yup
    .mixed()
    .oneOf(["Employee", "Manager", "Developer", "Designer", "Tester"])
    .required("Role is Required"),
  manager_id: yup.string().optional(),
  emergency_contact: yup.object({
    full_name: yup
      .string()
      .required("FullName of Emergency Contact is Required"),
    phone_number: yup
      .string()
      .required("PhoneNumber of Emergency Contact is Required"),
    email: yup
      .string()
      .required("Email of Emergency Contact is Required")
      .email("Invalid Email"),
    relationship: yup
      .string()
      .required("Relationship of Emergency Contact is Required"),
  }),
  contract_date: yup.string().required("Contract Date is Required"),
  user_type: yup
    .mixed()
    .oneOf(["super_admin", "admin", "employee"])
    .default("employee")
    .optional(),
  password: yup.string().default("Dino-123").optional(),
  salaryDetails: yup.object({
    basic_salary: yup.string().required("Basic Salary  is Required"),
    total_allowance: yup.string().required("Total Allowance  is Required"),
    annual_bonus: yup.string().required("Annual Bonus  is Required"),
    total_ctc: yup.string().required("Total CTC  is Required"),
  }),
});
