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
  schedules: Schedule[],
  color?: string
): Provider => ({
  id,
  schedules,
  color,
});

export const updateProviderSchedules = ({
  provider,
  schedules,
}: {
  provider: Provider;
  schedules: Schedule[];
}): Provider => ({ ...provider, schedules });

/**
 * Sorts schedules by date.
 * @param schedules: The schedules to sort.
 * @returns Object containing list of schedules (value) by date (key).
 */
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
