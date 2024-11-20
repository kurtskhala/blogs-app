import React from "react";
import BlogCard from "./components/blog-card/BlogCard";
import PopularTag from "./components/popular-tags/PopularTag";
import FeaturedAuthors from "./components/featured-authors/FeaturedAuthors";
import { articles } from "../../../data.json";

const Home: React.FC = () => {
  console.log(articles);

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
      <div className="col-span-2 space-y-8">
        {articles.map((article) => {
          return (
            <BlogCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              author={article.author}
              date={article.date}
              readTime={article.readTime}
              tags={article.tags}
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
