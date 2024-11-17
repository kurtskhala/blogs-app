interface ContentProps {
  excerpt: string;
}

const Content: React.FC<ContentProps> = ({ excerpt }) => (
  <div className="space-y-2">
    <p className="line-clamp-2 dark:text-gray-400">{excerpt}</p>
  </div>
);

export default Content;