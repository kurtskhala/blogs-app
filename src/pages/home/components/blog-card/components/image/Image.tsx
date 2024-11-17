interface ImageProps {
  src?: string;
}

const Image: React.FC<ImageProps> = ({ src }) => (
  <div className="h-48 w-full overflow-hidden  dark:bg-gray-800">
    {src ? (
      <img
        src={src}
        alt={"Blog cover"}
        className="h-full w-full object-cover"
      />
    ) : (
      <div className="flex h-full w-full items-center justify-center">
        <svg
          className="h-12 w-12 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    )}
  </div>
);

export default Image;
