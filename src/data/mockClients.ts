import { createClient, createReservation } from "../utils/clientUtils";
import { addDay, addHour } from "../utils/date";
import { BASE_DATE } from "./consts";

export const createReservationList = (
  list: [providerId: number, startHour: number, daysToAdd?: number][],

  startingIndex = 0
) =>
  list.map(([providerId, startHour, daysToAdd = 0], index) =>
    createReservation(
      index + startingIndex,
      providerId,
      addHour(addDay(BASE_DATE, daysToAdd), startHour)
    )
  );

export const mockClients = () => {
  const client1Reservations = createReservationList([
    [1, 6],
    [1, 10, 1],
    [2, 12],
  ]);

  const client2Reservations = createReservationList([
    [1, 7],
    [1, 14, 1],
    [2, 9],
    [3, 14],
  ]);

  const client3Reservations = createReservationList([
    [2, 14, 2],
    [2, 13, 3],
    [3, 16, 4],
  ]);

  return [
    createClient(1, client1Reservations),
    createClient(2, client2Reservations),
    createClient(3, client3Reservations),
  ];
};
