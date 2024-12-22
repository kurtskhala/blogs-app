export interface ProfileFormData {
  full_name_ka: string;
  full_name_en: string;
  avatar_url: string;
  phone: string;
}

export interface ProfileUpdateData extends ProfileFormData {
  id: string;
}
