export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends AuthCredentials {
  name: string;
  confirmPassword: string;
}

export interface LoginResponse {
  user: any;
  session: any;
}

export type User = {
  id: string;
} | null;
