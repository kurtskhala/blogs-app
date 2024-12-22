import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import AuthGuard from "@/components/route-guards/auth";
import { BLOGS_PATHS } from "../index.enum";

const BlogAuthorView = lazy(() => import("@/pages/author/author"));

const author = {
  name: "Jane Doe",
  bio: "Tech enthusiast, software engineer, and avid blogger. Passionate about AI, web development, and the future of technology.",
  avatar: "/path-to-avatar.jpg",
  initials: "JD",
  followers: 1234,
  following: 567,
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "AI",
    "Blockchain",
    "Web Development",
  ],
  socialLinks: {
    github: "https://github.com/janedoe",
    facebook: "https://facebook.com/janedoe",
    twitter: "https://twitter.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
  },
};

export const BLOG_AUTHOR_ROUTE = [
  <Route
    path={BLOGS_PATHS.BLOG_AUTHOR + "/:id"}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>
          <BlogAuthorView author={author} />
        </AuthGuard>
      </Suspense>
    }
  />,
];
