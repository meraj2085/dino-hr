const SkeletonCard = () => {
  return (
    <div className="flex flex-col w-full rounded-lg animate-pulse h-96">
      <div className="h-48 rounded-t bg-gray-100"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-200">
        <div className="w-full h-6 rounded bg-gray-100"></div>
        <div className="w-full h-6 rounded bg-gray-100"></div>
        <div className="w-3/4 h-6 rounded bg-gray-100"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
