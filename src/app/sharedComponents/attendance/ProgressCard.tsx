export const ProgressCard = ({
  title,
  progress,
  total,
  color,
}: {
  title: string;
  progress: number;
  total: number;
  color: string;
}) => {
  const progressPercentage = (progress / total) * 100;

  return (
    <div className="block rounded-lg px-4 py-2 shadow-sm border bg-[#F9F9F9] mb-2">
      <div className="flex justify-between">
        <p className="text-[#1F1F1F]">{title}</p>
        <p className="text-[#1F1F1F]">
          {progress} / {total} hrs
        </p>
      </div>
      <div className="w-full mt-1 bg-gray-200 rounded-3xl h-1 ">
        <div
          className="h-1 rounded-3xl"
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};
