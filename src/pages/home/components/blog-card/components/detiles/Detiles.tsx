import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ka';

dayjs.extend(relativeTime);

interface DetailsProps {
  // author: string;
  createdAt: string;
  // readTime: string;
}

const Details: React.FC<DetailsProps> = ({ createdAt }) => {
  const formatDate = (dateString: string) => {
    const postDate = dayjs(dateString);
    const now = dayjs();
    
    if (now.diff(postDate, 'day') < 1) {
      return postDate.fromNow();
    }
    
    return postDate.format('HH:mm - DD/MM/YYYY');
  };

  return (
    <div className="flex items-center space-x-2 dark:text-gray-400">
      {/* <span>{author}</span>
      <span>•</span> */}
      <span>{formatDate(createdAt)}</span>
      {/* <span>•</span>
      <span>{readTime}</span> */}
    </div>
  );
};

export default Details;
