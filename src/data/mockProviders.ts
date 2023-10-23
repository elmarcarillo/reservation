import { createProvider, createSchedule } from "../utils/providerUtils";

const BASE_DATE = new Date().setHours(6, 0, 0);

export const mockProviders = () => {
  const schedule1 = createSchedule(
    1,
    BASE_DATE,
    new Date(BASE_DATE).setMinutes(18)
  );
  return [createProvider(1, [schedule1])];
};
