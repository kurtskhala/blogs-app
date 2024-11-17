interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="rounded-full bg-gray-200 dark:bg-gray-800 px-3 py-1 text-sm dark:text-gray-400 transition-colors hover:bg-gray-700"
      >
        {tag}
      </span>
    ))}
  </div>
);

export default Tags;
