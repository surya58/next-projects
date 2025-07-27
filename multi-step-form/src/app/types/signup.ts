export interface SignupData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  
  // Address Information
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  
  // Profile Information
  bio: string;
}

export interface SignupContextType {
  data: SignupData;
  updateData: (field: keyof SignupData, value: string) => void;
  resetData: () => void;
}

export interface ValidationErrors {
  [key: string]: string;
}
