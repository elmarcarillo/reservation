import { Reservation } from "../../types/client";
import { Schedule } from "../../types/provider";

export type ScheduleByDayProps = {
  allReservations?: Reservation[];
  className?: string;
  clientReservations?: Reservation[];
  currentSelectedReservation?: Reservation;
  currentDate?: number;
  schedule?: Schedule[];
  onClickTimeSlot?: (time: number, reservation?: Reservation) => void;
  reservationCutoff?: number;
};
