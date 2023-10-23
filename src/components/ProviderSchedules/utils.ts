import { Schedule } from "../../types/provider";
import { getBeginningOfDay } from "../../utils/date";

type TimeByDay = { [key: string]: Schedule[] };

export const providerSchedulesByDate = (schedules: Schedule[]) => {
  const schedulesByDate = schedules.reduce((acc, cur) => {
    const currentDay = getBeginningOfDay(cur.startTime);
    if (!acc[currentDay]) {
      acc[currentDay] = [cur];
    } else {
      acc[currentDay] = [...acc[currentDay], cur];
    }
    return acc;
  }, {} as TimeByDay);
  return schedulesByDate;
};
