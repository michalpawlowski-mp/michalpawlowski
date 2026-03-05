export const calculateAge = (birthDate: string): number => {
  const birth = new Date(birthDate);
  const today = new Date();

  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  return today.getFullYear() - birth.getFullYear() - (hasHadBirthdayThisYear ? 0 : 1);
};

export const calculateDuration = (start: string, end?: string | null) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  const years = Math.floor(months / 12);
  months = months % 12;

  let result = "";

  if (years > 0) {
    result += `${years} rok `;
  }

  if (months > 0) {
    result += `${months} mies.`;
  }

  return result.trim();
};
