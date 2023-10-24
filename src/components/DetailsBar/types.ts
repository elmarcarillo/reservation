import { Client, Reservation } from "../../types/client";
import { Provider } from "../../types/provider";

export type ClientDetailsBarProps = {
  allReservations?: Reservation[];
  canEdit?: boolean;
  currentClient?: Client;
  currentReservation?: Reservation;
  date?: number;
  onCreateReservation?: (date: number, provider: Provider) => void;
  onConfirmReservation?: (reservation: Reservation) => void;
  onChangeDate?: (date: number) => void;
  onChangeProvider?: (provider: Provider | undefined) => void;
  providers?: Provider[];
  selectedProvider?: Provider;
};

export type ProviderDetailsBarProps = {
  currentProvider?: Provider;
  onAddSchedule?: (
    startDate: number,
    endDate: number,
    provider: Provider
  ) => void;
  onChangeStartDate: (date: number) => void;
  onChangeEndDate: (date: number) => void;
  startDate?: number;
  endDate?: number;
};
