import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import RegisterGuard from "@/components/route-guards/registration";
import { AUTH_PATHS } from "../index.enum";

const AuthRegisterView = lazy(() => import("@/pages/register/register"));

export const AUTH_REGISTER_ROUTE = [
  <Route
    path={AUTH_PATHS.REGISTER}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterGuard>
          <AuthRegisterView />
        </RegisterGuard>{" "}
      </Suspense>
    }
  />,
];
