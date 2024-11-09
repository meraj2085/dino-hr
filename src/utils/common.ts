export const formatSecondToTime = (
  seconds: any,
  showSecond: boolean = false
) => {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  if (showSecond) {
    return `${hours}:${minutes}:${remainingSeconds}`;
  } else {
    return `${hours}:${minutes}`;
  }
};
