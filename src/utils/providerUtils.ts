import { Provider, Schedule } from "../types/provider";
import { getBeginningOfDay } from "./date";

export type SchedulesByDay = { [key: string]: Schedule[] };

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

export const schedulesByDate = (schedules: Schedule[]) => {
  const sortedSchedules = schedules.reduce((acc, cur) => {
    const currentDay = getBeginningOfDay(cur.startTime);
    if (!acc[currentDay]) {
      acc[currentDay] = [cur];
    } else {
      acc[currentDay] = [...acc[currentDay], cur];
    }
    return acc;
  }, {} as SchedulesByDay);
  return sortedSchedules;
};
