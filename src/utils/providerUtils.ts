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

export const createProvider = (id: number, schedule: Schedule[]): Provider => ({
  id,
  schedule,
});

export const updateProviderSchedule = ({
  provider,
  schedule,
}: {
  provider: Provider;
  schedule: Schedule[];
}): Provider => ({ ...provider, schedule });
