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

export const formatSecondToDecimalHour = (time?: string): number => {
  if (!time || typeof time !== "string") {
    return 0;
  }
  const [hour, minute, sec] = time.split(":").map(Number);
  if (isNaN(hour) || isNaN(minute) || isNaN(sec)) {
    return 0;
  }
  const totalSec = hour * 3600 + minute * 60 + (sec || 0);
  const decimalHours = totalSec / 3600;
  
  return parseFloat(decimalHours.toFixed(2));
};
