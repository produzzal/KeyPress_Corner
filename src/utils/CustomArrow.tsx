// Custom Prev Arrow Component
export const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-60 md:top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};

// Custom Next Arrow Component
export const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-60 md:top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};
