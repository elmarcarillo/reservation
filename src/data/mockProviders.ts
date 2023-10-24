import { addDay, addHour } from "../utils/date";
import { createProvider, createSchedule } from "../utils/providerUtils";
import { BASE_DATE } from "./consts";

export const BLANK_SCHEDULE = createSchedule(
  0,
  new Date().setHours(0, 0, 0, 0),
  new Date().setHours(23, 59, 0, 0)
);

export const mockProviders = () => {
  const schedule1 = createSchedule(1, BASE_DATE, addHour(BASE_DATE, 12));

  const schedule2 = createSchedule(
    2,
    addDay(BASE_DATE),
    addHour(addDay(BASE_DATE), 6)
  );

  const schedule3 = createSchedule(
    3,
    addHour(addDay(BASE_DATE), 8),
    addHour(addDay(BASE_DATE), 11)
  );

  const schedule4 = createSchedule(
    4,
    addHour(addDay(BASE_DATE, 2), 4),
    addHour(addDay(BASE_DATE, 2), 6)
  );

  const schedule5 = createSchedule(
    5,
    addHour(addDay(BASE_DATE, 2), 9),
    addHour(addDay(BASE_DATE, 2), 10)
  );

  return [
    createProvider(1, [schedule1, schedule2, schedule3, schedule4, schedule5]),
  ];
};
