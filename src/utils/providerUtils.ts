import { Provider, Schedule } from "../types/provider";

export const createSchedule = (
  id: number,
  startTime: number,
  endTime: number
) => ({
  id,
  startTime,
  endTime,
});

export const createProvider = (
  id: number,
  schedules: Schedule[]
): Provider => ({
  id,
  schedules,
});

export const updateProviderSchedules = ({
  provider,
  schedules,
}: {
  provider: Provider;
  schedules: Schedule[];
}): Provider => ({ ...provider, schedules });
