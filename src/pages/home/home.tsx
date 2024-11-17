import BlogCard from "./components/blog-card/BlogCard";

const Home: React.FC = () => {
  return (
    <div>
      <BlogCard
        title="The Future of Blockchain Technology"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        author="John Doe"
        date="May 15, 2023"
        readTime="5 min read"
        tags={["Blockchain", "Technology", "Future"]}
      />
      <BlogCard
        title="The Future of Blockchain Technology"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        author="John Doe"
        date="May 15, 2023"
        readTime="5 min read"
        tags={["Blockchain", "Technology", "Future"]}
      />
      <BlogCard
        title="The Future of Blockchain Technology"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        author="John Doe"
        date="May 15, 2023"
        readTime="5 min read"
        tags={["Blockchain", "Technology", "Future"]}
      />
    </div>
  );
};

export default Home;
