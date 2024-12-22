export type Blog = {
  created_at: string;
  [key: `title_${string}`]: string;
  id: number;
  image_url: string;
  [key: `description_${string}`]: string;
  user_id: string;
};

export type BlogsFilterFormValues = {
  searchText: string;
};
