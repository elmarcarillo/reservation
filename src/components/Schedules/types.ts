import { Schedule } from "../../types/provider";
import { Reservation } from "../../types/client";

export type SchedulesProps = {
  schedules: Schedule[];
  reservations?: Reservation[];
};
