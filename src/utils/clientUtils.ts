import { Client, Reservation } from "../types/client";
import { getNow } from "./date";

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
