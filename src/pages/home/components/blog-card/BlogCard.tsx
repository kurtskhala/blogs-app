import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Image from "./components/image/Image";

interface BlogCardProps {
  title: string;
  excerpt: string;

  imageUrl?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, imageUrl }) => {
  return (
    <article className="transition-color mb-10 overflow-hidden rounded-lg border-2 border-black dark:bg-gray-900">
      <Image src={imageUrl} />
      <div className="space-y-4 p-6">
        <Header title={title} />
        <Content excerpt={excerpt} />
      </div>
    </article>
  );
};

export default BlogCard;
