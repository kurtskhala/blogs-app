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
  return supabase.auth.signInWithPassword({ email, password }).then((res) => {
    if (
      res?.error &&
      res?.error?.status &&
      (res?.error?.status < 200 || res?.error?.status >= 300)
    ) {
      throw new Error("Auth");
    }

    return res;
  });
};

export const logout = () => {
  return supabase.auth.signOut();
}