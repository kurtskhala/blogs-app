import Content from "./components/content/Content";
import Details from "./components/detiles/Detiles";
import Header from "./components/header/Header";
import Image from "./components/image/Image";
import Tags from "./components/tags/Tags";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl?: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  imageUrl,
  tags,
}) => {
  return (
    <article className="transition-color mb-10 overflow-hidden rounded-lg border-2 border-black dark:bg-gray-900">
      <Image src={imageUrl} />
      <div className="space-y-4 p-6">
        <Details author={author} date={date} readTime={readTime} />
        <Header title={title} />
        <Content excerpt={excerpt} />
        <Tags tags={tags} />
      </div>
    </article>
  );
};

export default BlogCard;
