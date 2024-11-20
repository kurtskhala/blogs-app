import { supabase } from "..";

export const register = ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });
};

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signInWithPassword({ email, password });
};
