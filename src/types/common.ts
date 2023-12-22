export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IService {
  name: string;
  price: number;
  description: string;
  availability: boolean;
  image_url: string;
}

type UserName = {
  firstName: string;
  lastName: string;
};

export enum UserRoles {
  USER = "user",
  ADMIN = "admin",
  SUPER_ADMIN = "super_admin",
}

export type IUser = {
  id?: string;
  name?: UserName;
  email?: string;
  mobileNumber?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type IBlog = {
  id?: string;
  image_url?: string;
  title?: string;
  description?: string;
  views?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type INews = {
  id?: string;
  image_url?: string;
  title?: string;
  description?: string;
  views?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type IFaq = {
  id?: string;
  question?: string;
  answer?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type IOrganization = {
  bin_number?: string;
  nid_number?: string;
  tin_number?: string;
  email?: string;
  street?: string;
  city?: string;
  landmark?: string;
  country?: string;
  state?: string;
  postal_code?: number;
  billing_street?: string;
  billing_city?: string;
  billing_landmark?: string;
  billing_country?: string;
  billing_state?: string;
  billing_postal_code?: number;
  registered_street?: string;
  registered_city?: string;
  registered_landmark?: string;
  registered_country?: string;
  registered_state?: string;
  registered_postal_code?: number;
  contact_person_first_name?: string;
  contact_person_last_name?: string;
  contact_person_middle_name?: string;
  contact_person_email?: string;
  contact_person_phone_number?: string;
  account_manager_first_name?: string;
  account_manager_last_name?: string;
  account_manager_middle_name?: string;
  account_manager_designation?: string;
  account_manager_email?: string;
  account_manager_phone_number?: string;
  billing_contact_person_first_name?: string;
  billing_contact_person_last_name?: string;
  billing_contact_person_middle_name?: string;
  billing_contact_person_email?: string;
  billing_contact_person_phone_number?: string;
  bank_name?: string;
  account_number?: number;
  routing_number?: string;
  plan_validity?: string;
  number_of_users?: string;
  profile_picture?: string;
  company_name?: string;
  company_code?: string;
  is_profile_completed?: boolean;
  is_admin_user_created?: boolean;
  status?: "Deleted" | "Disabled" | "Active";
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};