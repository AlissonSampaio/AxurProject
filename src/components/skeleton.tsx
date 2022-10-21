type SkeletonProps = {
  className?: string;
};

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => (
  <div
    className={
      "animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 " + className
    }
  ></div>
);
