export type Schedule = {
  id: number;
  date: number;
  startTime: number;
  endTime: number;
};

export type Provider = {
  id: number;
  schedule: Schedule[];
};
