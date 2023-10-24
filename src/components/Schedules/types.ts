import { Schedule } from "../../types/provider";
import { Reservation } from "../../types/client";

export type SchedulesProps = {
  schedules: Schedule[];
  clientReservations?: Reservation[];
  allReservations?: Reservation[];
  onClickTimeSlot?: (date: number, reservation?: Reservation) => void;
  currentSelectedReservation?: Reservation;
};
