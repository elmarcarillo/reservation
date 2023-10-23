export type Schedule = {
  id: number;
  startTime: number;
  endTime: number;
};

export type Provider = {
  id: number;
  schedules: Schedule[];
};
