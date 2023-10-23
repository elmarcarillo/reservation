export const SECOND_IN_MILLISECONDS = 1000;
export const MINUTE_IN_MILLISECONDS = SECOND_IN_MILLISECONDS * 60;
export const HOUR_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 60;
export const DAY_IN_MILLISECONDS = HOUR_IN_MILLISECONDS * 24;

export const getNow = (): number => new Date().setSeconds(0); // Omit Seconds

export const getDate = (date: number): Date => new Date(date);

export const getDateValue = (date: number): number => getDate(date).getTime();

export const getDateString = (date: number): string =>
  getDate(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

export const addDay = (date: number, numberOfDays = 1): number =>
  date + DAY_IN_MILLISECONDS * numberOfDays;

export const addHour = (date: number, numberOfHours = 1): number =>
  date + HOUR_IN_MILLISECONDS * numberOfHours;

export const addMinute = (date: number, numberOfMinutes = 1): number =>
  date + MINUTE_IN_MILLISECONDS * numberOfMinutes;
