import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import AuthGuard from "@/components/route-guards/auth";
import { BLOGS_PATHS } from "../index.enum";

const BlogCreateView = lazy(() => import("@/pages/blog-create/blog-create"));

export const BLOG_CREATE_ROUTE = [
  <Route
    path={BLOGS_PATHS.BLOG_CREATE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>
          <BlogCreateView />
        </AuthGuard>
      </Suspense>
    }
  />,
];
