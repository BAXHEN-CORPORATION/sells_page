import { GetLocationQuery } from "generated";

export const getLocationInfo = (location: GetLocationQuery | undefined) => {
  const country = location?.location.country.name || "max";
  const city = location?.location.city.name || "requests limit exceeded";

  const timezoneLong = location?.location?.timezone?.replace("_", " ") || "max";
  const dayOfYear = location?.location?.day_of_year || "requests";
  const dayOfWeek = location?.location?.day_of_week || "limit";
  const weekNumber = location?.location?.week_number || "exceeded";

  return { country, city, timezoneLong, dayOfYear, dayOfWeek, weekNumber };
};
