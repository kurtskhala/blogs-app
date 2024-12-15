import { supabase } from "..";
import { fillProfileInfoPayload } from "./index.types";

export const fillProfileInfo = (payload: fillProfileInfoPayload) => {
  return supabase
    .from("profiles")
    .upsert(payload as any)
    .throwOnError();
};

export const getProfileInfo = (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};