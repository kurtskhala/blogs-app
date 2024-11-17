interface DetailsProps {
  author: string;
  date: string;
  readTime: string;
}

const Details: React.FC<DetailsProps> = ({ author, date, readTime }) => (
  <div className="flex items-center space-x-2 dark:text-gray-400">
    <span>{author}</span>
    <span>•</span>
    <span>{date}</span>
    <span>•</span>
    <span>{readTime}</span>
  </div>
);

export default Details;
