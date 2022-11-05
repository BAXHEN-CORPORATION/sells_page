export const getDate = (date?: string) => {
  if (date) {
    return new Date(date);
  }

  return new Date();
};

export const getHoursFormatted = (date: Date) => {
  return `${date.getHours()}:${date.getMinutes().toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })}`;
};

export const getIsDay = (date: Date) => {
  return date.getHours() < 18 && date.getHours() > 5;
};

export const getTimezone = (date: Date) => {
  return date
    .toLocaleDateString(undefined, {
      day: "2-digit",
      timeZoneName: "short",
    })
    .slice(2);
};
