import BlogCard from "./components/blog-card/BlogCard";
import PopularTag from "./components/popular-tags/PopularTag";
import FeaturedAuthors from "./components/featured-authors/FeaturedAuthors";
import { useParams, useSearchParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import AuthInput from "@/components/auth/AuthInput";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/supabase";
import { useCallback, useEffect, useState } from "react";
import qs from "qs";
import underscore from "underscore";

type Blog = {
  created_at: string;
  [key: `title_${string}`]: string;
  id: number;
  image_url: string;
  [key: `description_${string}`]: string;
  user_id: string;
};

type BlogsFilterFormValues = {
  searchText: string;
};

const fetchBlogs = async (
  lang: string,
  searchText?: string,
): Promise<Blog[]> => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .ilike(`title_${lang}`, `%${searchText || ""}%`);

  if (error) {
    throw error;
  }

  return data as Blog[];
};

const Home: React.FC = () => {
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[] | null>(null);
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
  const { data: blogs } = useQuery<Blog[]>({
    queryKey: ["blogs", lang, parsedQueryParams.searchText],
    queryFn: () => fetchBlogs(lang, parsedQueryParams.searchText),
  });

  const watchedSearchText = watch("searchText");

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

  const fetchBlogs2 = useCallback(
    underscore.debounce((watchedSearchText: string) => {
      supabase
        .from("blogs")
        .select("*")
        .ilike(`title_${lang}`, `%${watchedSearchText}%`)
        .throwOnError()
        .then((res) => {
          const blogsList = res.data as unknown as Blog[];
          setFilteredBlogs(blogsList);
        });
    }, 500),
    [],
  );

  useEffect(() => {
    if (watchedSearchText?.length > 2) {
      fetchBlogs2(watchedSearchText);
    }
  }, [watchedSearchText, fetchBlogs]);

  const displayedBlogs = filteredBlogs || blogs;  

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
          {displayedBlogs?.map((blog) => {
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
