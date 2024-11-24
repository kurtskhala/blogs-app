import { userAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);
  const params = useParams();
  const lang = params.lang as string;

  if (!user) {
    return <Navigate to={`/${lang}/`} />;
  }

  return children || <Outlet />;
};

export default AuthGuard;
