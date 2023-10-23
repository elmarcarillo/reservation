import { Provider, Schedule } from "../types/provider";
import { Client, Reservation } from "../types/client";
import { getNow } from "./date";

export const createProvider = ({
  id,
  schedule,
}: {
  id: number;
  schedule: Schedule[];
}): Provider => ({ id, schedule });

export const updateProviderSchedule = ({
  provider,
  schedule,
}: {
  provider: Provider;
  schedule: Schedule[];
}): Provider => ({ ...provider, schedule });

export const createClient = ({
  id,
  reservation,
}: {
  id: number;
  reservation: Reservation;
}): Client => ({ id, reservation });

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
