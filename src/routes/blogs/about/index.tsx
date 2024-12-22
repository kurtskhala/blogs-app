import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import AuthGuard from "@/components/route-guards/auth";
import { BLOGS_PATHS } from "../index.enum";

const BlogAboutView = lazy(() => import("@/pages/about/about"));

export const BLOG_ABOUT_ROUTE = [
  <Route
    path={BLOGS_PATHS.BLOG_ABOUT}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>
          <BlogAboutView />
        </AuthGuard>
      </Suspense>
    }
  />,
];
