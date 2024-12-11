import { supabase } from "..";
import { Blog, fillProfileInfoPayload } from "./index.types";

export const fillProfileInfo = (payload: fillProfileInfoPayload) => {
  return supabase
    .from("profiles")
    .upsert(payload as any)
    .throwOnError();
};

export const getProfileInfo = (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};

export const getBlogs = () => {
  return supabase
  .from("blogs")
  .select("*")
  .throwOnError()
  .then((res) => {
    const blogsList = res?.data as Blog[];
    return blogsList;
  });
};
