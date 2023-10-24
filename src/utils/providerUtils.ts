import { Provider, Schedule } from "../types/provider";
import { getBeginningOfDay } from "./date";

export type SchedulesByDay = { [key: string]: Schedule[] };

/**
 * Helper function to create schedule.
 * @param id
 * @param startTime
 * @param endTime
 * @returns The newly created schedule.
 */
export const createSchedule = (
  id: number,
  startTime: number,
  endTime: number
) => ({
  id,
  startTime,
  endTime,
});

/**
 * Helper function to create provider.
 * @param id
 * @param schedules
 * @param color
 * @returns The newly created provider.
 */
export const createProvider = (
  id: number,
  schedules: Schedule[],
  color?: string
): Provider => ({
  id,
  schedules,
  color,
});

/**
 * Adds schedule to existing provider
 * @param provider: Provider to add schedule to.
 * @param schedule: The schedule to add,
 * @returns Updated provider with new schedule added.
 */
export const addSchedule = (
  provider: Provider,
  schedule: Schedule
): Provider => ({ ...provider, schedules: [...provider.schedules, schedule] });

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
