import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import AuthGuard from "@/components/route-guards/auth";
import { BLOGS_PATHS } from "../index.enum";

const BlogProfileView = lazy(() => import("@/pages/profile/profile"));

export const BLOG_PROFILE_ROUTE = [
  <Route
    path={BLOGS_PATHS.BLOG_PROFILE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>
          <BlogProfileView />
        </AuthGuard>
      </Suspense>
    }
  />,
];
