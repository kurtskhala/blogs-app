import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import RegisterGuard from "@/components/route-guards/registration";
import { AUTH_PATHS } from "../index.enum";

const AuthLoginView = lazy(() => import("@/pages/login/login"));

export const AUTH_LOGIN_ROUTE = [
  <Route
    path={AUTH_PATHS.LOGIN}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterGuard>
          <AuthLoginView />
        </RegisterGuard>{" "}
      </Suspense>
    }
  />,
];
