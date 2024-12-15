import Content from "./components/content/Content";
import Details from "./components/detiles/Detiles";
import Header from "./components/header/Header";
import Image from "./components/image/Image";

interface BlogCardProps {
  title: string;
  excerpt: string;

  imageUrl?: string;
  createdAt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  imageUrl,
  createdAt,
}) => {
  return (
    <article className="transition-color mb-10 overflow-hidden rounded-lg border-2 border-black dark:bg-gray-900">
      <Image src={imageUrl} />
      <div className="space-y-4 p-6">
        <Header title={title} />
        <Content excerpt={excerpt} />
        <Details createdAt={createdAt}/>
      </div>
    </article>
  );
};

export default BlogCard;
