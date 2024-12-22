import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import AuthGuard from "@/components/route-guards/auth";
import { BLOGS_PATHS } from "../index.enum";

const BlogPostseView = lazy(() => import("@/pages/blog/blog"));

export const BLOG_POSTS_ROUTE = [
  <Route
    path={BLOGS_PATHS.BLOG_POSTS + "/:id"}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>
          <BlogPostseView />
        </AuthGuard>
      </Suspense>
    }
  />,
];
