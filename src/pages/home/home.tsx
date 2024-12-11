import React, { useEffect, useState } from "react";
import BlogCard from "./components/blog-card/BlogCard";
import PopularTag from "./components/popular-tags/PopularTag";
import FeaturedAuthors from "./components/featured-authors/FeaturedAuthors";
import { useParams } from "react-router-dom";
import { getBlogs } from "@/supabase/account";

type Blog = {
  created_at: string;
  [key: `title_${string}`]: string;
  id: number;
  image_url: string;
  [key: `description_${string}`]: string;
  user_id: string;
};

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    getBlogs().then((res) => setBlogs(res));
  }, []);
  const params = useParams();
  const lang = params.lang as string;

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
      <div className="col-span-2 space-y-8">
        {blogs.map((blog) => {
          const blogImageUrl = `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}${blog?.image_url}`;
          return (
            <BlogCard
              key={blog.id}
              title={blog[`title_${lang}`]}
              excerpt={blog[`description_${lang}`]}
              imageUrl={blogImageUrl}
            />
          );
        })}
      </div>

      <div className="space-y-8">
        <PopularTag />
        <FeaturedAuthors />
      </div>
    </div>
  );
};

export default Home;
