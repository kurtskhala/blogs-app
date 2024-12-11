export type fillProfileInfoPayload = {
  id: string | number;
  full_name_ka: string;
  full_name_en: string;
  avatar_url: string;
  phone: string;
};

export type Blog = {
  created_at: string;
  [key: `title_${string}`]: string;
  id: number;
  image_url: string;
  [key: `description_${string}`]: string;
  user_id: string;
};
