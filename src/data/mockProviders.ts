import { addDay, addHour } from "../utils/date";
import { createProvider, createSchedule } from "../utils/providerUtils";
import { BASE_DATE } from "./consts";

export const mockProviders = () => {
  const schedule1 = createSchedule(1, BASE_DATE, addHour(BASE_DATE, 12));

  const schedule2 = createSchedule(
    2,
    addDay(BASE_DATE),
    addHour(addDay(BASE_DATE), 12)
  );

  return [createProvider(1, [schedule1, schedule2])];
};
