import { RESERVATION_CUTOFF, RESERVATION_LENGTH } from "../consts";
import { Client, Reservation } from "../types/client";
import { Schedule } from "../types/provider";
import { getBeginningOfDay, getNow } from "./date";

export type ReservationsByDay = { [key: string]: Reservation[] };

/**
 * Helper function to create reservation.
 * @param id
 * @param providerId
 * @param startTime
 * @param endTime
 * @returns The newly created reservation.
 */
export const createReservation = (
  id: number,
  providerId: number,
  startTime: number,
  endTime?: number
): Reservation => ({
  id,
  providerId,
  startTime,
  endTime: endTime ?? new Date(startTime + RESERVATION_LENGTH).getTime(),
  createdAt: getNow(),
});

/**
 * Helper function to create a client.
 * @param id
 * @param reservations
 * @returns The newly created client.
 */
export const createClient = (
  id: number,
  reservations: Reservation[]
): Client => ({
  id,
  reservations,
});

/**
 * Sorts reservations by date.
 * @param reservations: The reservations to sort.
 * @returns Object containing list of reservations (value) by date (key).
 */
export const reservationsByDate = (reservations: Reservation[]) => {
  const sortedReservations = reservations.reduce((acc, cur) => {
    const currentDay = getBeginningOfDay(cur.startTime);
    if (!acc[currentDay]) {
      acc[currentDay] = [cur];
    } else {
      acc[currentDay] = [...acc[currentDay], cur];
    }
    return acc;
  }, {} as ReservationsByDay);
  return sortedReservations;
};
