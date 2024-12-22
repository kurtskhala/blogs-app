import BlogCard from "./components/blog-card/BlogCard";
import PopularTag from "./components/popular-tags/PopularTag";
import FeaturedAuthors from "./components/featured-authors/FeaturedAuthors";
import { useParams, useSearchParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import AuthInput from "@/components/auth/AuthInput";
import {  useEffect } from "react";
import qs from "qs";
import { useBlogs } from "@/hooks/blogs/useFetchBlogs";


type BlogsFilterFormValues = {
  searchText: string;
};


const Home: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;

  const [searchParams, setSearchParams] = useSearchParams();
  const parsedQueryParams = qs.parse(
    Array.from(searchParams.entries())
      .map(([key, value]) => `${key}=${value}`)
      .join("&"),
  ) as BlogsFilterFormValues;

  const { control, watch } = useForm<BlogsFilterFormValues>({
    defaultValues: parsedQueryParams,
  });

  const watchedSearchText = watch("searchText");
  const { data: blogs } = useBlogs({ 
    lang, 
    searchText: parsedQueryParams.searchText 
  });


  useEffect(() => {
    if (watchedSearchText) {
      const searchParamsString = qs.stringify(
        { searchText: watchedSearchText },
        {
          skipNulls: true,
          filter: (_, value) => value || undefined,
        }
      );
      setSearchParams(searchParamsString);
    } else {
      setSearchParams({});
    }
  }, [watchedSearchText, setSearchParams]);

  return (
    <div>
      <div>
        <Controller
          name="searchText"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <AuthInput
                  label="Search text"
                  name="title_ka"
                  value={value}
                  onChange={onChange}
                  placeholder="Enter text"
                />
              </>
            );
          }}
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div className="space-y-8">
          <PopularTag />
          <FeaturedAuthors />
        </div>
        <div className="col-span-2 space-y-8">
          {blogs?.map((blog) => {
            const blogImageUrl = `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}${blog?.image_url}`;
            return (
              <BlogCard
                key={blog.id}
                title={blog[`title_${lang}`]}
                excerpt={blog[`description_${lang}`]}
                imageUrl={blogImageUrl}
                createdAt={blog.created_at}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
