import { calculateDuration } from "./date";

export const formatDate = (start: string, end?: string | null) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;

  const startText = `${startDate.getMonth() + 1}/${startDate.getFullYear()}`;
  const endText = endDate
    ? `${endDate.getMonth() + 1}/${endDate.getFullYear()}`
    : "obecnie";

  const duration = calculateDuration(start, end);

  return `${startText} – ${endText} (${duration})`;
};
