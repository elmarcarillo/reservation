import { RESERVATION_LENGTH } from "../consts";
import { Client, Reservation } from "../types/client";
import { getNow } from "./date";

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

export const createClient = (id: number, reservation: Reservation): Client => ({
  id,
  reservation,
});

export const updateClientReservation = ({
  client,
  reservation,
}: {
  client: Client;
  reservation: Reservation;
}): Client => ({ ...client, reservation });

export const confirmClientReservation = (
  client: Client,
  overrideConfirmDate?: number
): Client => {
  const { reservation, ...clientInfo } = client;
  return {
    ...clientInfo,
    reservation: {
      ...reservation,
      confirmedAt: overrideConfirmDate ?? getNow(),
    },
  };
};
