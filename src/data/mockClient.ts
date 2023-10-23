import { createClient, createReservation } from "../utils/clientUtils";
import { addHour } from "../utils/date";
import { BASE_DATE } from "./consts";

export const mockClient = () => {
  const reservation = createReservation(1, 1, addHour(BASE_DATE, 1));
  return createClient(1, reservation);
};
