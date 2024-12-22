import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/supabase";
import { useEffect, useRef, useState } from "react";
import underscore from "underscore";
import { Blog } from "@/types/blog";
import { QueryKeys } from "@/types/queryKeys.enum";

type BlogQueryParams = {
  lang: string;
  searchText?: string;
};

export const useBlogs = ({ lang, searchText }: BlogQueryParams) => {
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);

  const debouncedSetSearch = useRef(
    underscore.debounce((text: string) => {
      setDebouncedSearchText(text);
    }, 1000),
  ).current;

  useEffect(() => {
    debouncedSetSearch(searchText || "");

    return () => {
      debouncedSetSearch.cancel();
    };
  }, [searchText, debouncedSetSearch]);

  const fetchBlogs = async (): Promise<Blog[]> => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .ilike(`title_${lang}`, `%${debouncedSearchText || ""}%`);

    if (error) {
      throw error;
    }

    return data as Blog[];
  };

  return useQuery<Blog[], Error>({
    queryKey: [QueryKeys.BLOGS, lang, debouncedSearchText],
    queryFn: fetchBlogs,
    enabled: !debouncedSearchText || debouncedSearchText.length >= 3,
  });
};
