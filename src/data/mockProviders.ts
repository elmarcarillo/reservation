import { addDay, addHour } from "../utils/date";
import { createProvider, createSchedule } from "../utils/providerUtils";
import { BASE_DATE } from "./consts";

export const createBlankSchedule = (id: number, daysToAdd = 0) =>
  createSchedule(
    id,
    addDay(new Date().setHours(0, 0, 0, 0), daysToAdd),
    addDay(new Date().setHours(23, 59, 0, 0), daysToAdd)
  );

export const BLANK_SCHEDULE = createBlankSchedule(0, 0);

export const BLANK_SCHEDULES = [
  BLANK_SCHEDULE,
  createBlankSchedule(1, 1),
  createBlankSchedule(2, 2),
  createBlankSchedule(3, 3),
  createBlankSchedule(4, 4),
  createBlankSchedule(5, 5),
  createBlankSchedule(6, 6),
];

export const createScheduleList = (
  list: [startHour: number, endHour: number, daysToAdd?: number][],
  startingIndex = 0
) =>
  list.map(([startHour, endHour, daysToAdd = 0], index) =>
    createSchedule(
      index + startingIndex,
      addHour(addDay(BASE_DATE, daysToAdd), startHour),
      addHour(addDay(BASE_DATE, daysToAdd), endHour)
    )
  );

export const mockProviders = () => {
  const provider1Schedule = createScheduleList(
    [
      [6, 18],
      [8, 11, 1],
      [12, 16, 1],
      [9, 17, 2],
      [8, 10, 3],
      [11, 12, 3],
      [14, 16, 3],
      [17, 19, 3],
      [6, 10, 4],
      [12, 15, 4],
    ],
    0
  );

  const provider2Schedule = createScheduleList(
    [
      [9, 13],
      [14, 17],
      [10, 14, 1],
      [15, 17, 1],
      [9, 10, 2],
      [11, 12, 2],
      [14, 15, 2],
      [16, 18, 2],
      [12, 17, 3],
      [7, 14, 4],
    ],
    provider1Schedule.length
  );

  const provider3Schedule = createScheduleList(
    [
      [14, 15],
      [16, 20],
      [8, 18, 1],
      [7, 14, 2],
      [17, 19, 2],
      [10, 12, 3],
      [14, 18, 3],
      [9, 11, 4],
      [12, 15, 4],
      [16, 17, 4],
    ],
    provider2Schedule.length
  );

  return [
    createProvider(1, provider1Schedule),
    createProvider(2, provider2Schedule),
    createProvider(3, provider3Schedule),
  ];
};
