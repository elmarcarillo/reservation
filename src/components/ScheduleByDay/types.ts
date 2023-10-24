import { Reservation } from "../../types/client";
import { Schedule } from "../../types/provider";

export type ScheduleByDayProps = {
  className?: string;
  schedule?: Schedule[];
  reservations?: Reservation[];
  onClickTimeSlot?: (time: number, reservation?: Reservation) => void;
};
