import { createClient, createReservation } from "../utils/clientUtils";
import { addHour } from "../utils/date";
import { BASE_DATE } from "./consts";

export const mockClients = () => {
  const reservation1 = createReservation(1, 1, addHour(BASE_DATE, 1));
  const reservation2 = createReservation(2, 1, addHour(BASE_DATE, 5));
  return [createClient(1, [reservation1, reservation2])];
};
