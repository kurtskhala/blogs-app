import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/supabase";
import { Blog } from "@/types/blog";
import { QueryKeys } from "@/types/queryKeys.enum";

export const useBlogs = (lang: string, searchText?: string) => {
  return useQuery<Blog[]>({
    queryKey: [QueryKeys.BLOGS, lang, searchText],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .ilike(`title_${lang}`, `%${searchText || ""}%`);

      if (error) {
        throw error;
      }

      return data as Blog[];
    },
  });
};
