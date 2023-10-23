import { Schedule } from "../types/provider";
import { Reservation } from "../types/client";
import { RESERVATION_CUTOFF } from "../consts";

export const canReserve = (
  reservation: Reservation,
  schedule: Schedule,
  cutoff = RESERVATION_CUTOFF
) => {
  const { startTime: reservationStartTime } = reservation;
  const { startTime } = schedule;

  return startTime - cutoff <= reservationStartTime;
};
