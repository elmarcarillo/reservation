import { useState } from "react";
import { mockProviders } from "./data/mockProviders";
import { mockClients } from "./data/mockClients";
import { Client, Reservation } from "./types/client";
import { addHour, getBeginningOfDay, getNow } from "./utils/date";
import { NavBarView } from "./components/NavBar";
import { Provider } from "./types/provider";
import { createReservation } from "./utils/clientUtils";
import { addSchedule, createSchedule } from "./utils/providerUtils";

export const useAppState = () => {
  const [providers, setProviders] = useState(mockProviders());
  const [currentProvider, setCurrentProvider] = useState<Provider>(
    providers[0]
  );

  const [clients, setClients] = useState(mockClients());
  const [currentClient, setCurrentClient] = useState<Client>(clients[0]);

  const [currentReservation, setCurrentReservation] = useState<
    Reservation | undefined
  >(undefined);

  const [selectedDate, setSelectedDate] = useState(getBeginningOfDay());
  const [selectedEndDate, setSelectedEndDate] = useState(
    addHour(getBeginningOfDay())
  );
  const [selectedProvider, setSelectedProvider] = useState<
    Provider | undefined
  >(currentProvider);
  const [navBarView, setNavBarView] = useState<NavBarView>();

  const allReservations = clients.flatMap((client) => client.reservations);
  const allSchedules = providers.flatMap((provider) => provider.schedules);
  const numberOfReservations = clients.reduce(
    (acc, cur) => acc + cur.reservations.length,
    0
  );

  const handleAddSchedule = (
    startDate: number,
    endDate: number,
    provider: Provider
  ) => {
    const newProvider = addSchedule(
      provider,
      createSchedule(allSchedules.length, startDate, endDate)
    );
    const newProviders = [
      ...providers.filter((pro) => pro.id !== provider.id),
      newProvider,
    ];
    setProviders(newProviders);
    setCurrentProvider(newProvider);
  };

  const handleCreateReservation = (date: number, provider: Provider) => {
    const newCurrentClient = {
      ...currentClient,
      reservations: [
        ...currentClient.reservations,
        createReservation(numberOfReservations, provider.id, date),
      ],
    };
    const newClients = [
      ...clients.filter((client) => client.id !== currentClient.id),
      newCurrentClient,
    ];
    setClients(newClients);
    setCurrentClient(newCurrentClient);
    setCurrentReservation(undefined);
  };

  const handleConfirmReservation = (reservation: Reservation) => {
    const newCurrentReservation = { ...reservation, confirmedAt: getNow() };
    const newCurrentClient = {
      ...currentClient,
      reservations: [
        ...currentClient.reservations.filter(
          (res) => res.id !== reservation.id
        ),
        newCurrentReservation,
      ],
    };
    const newClients = [
      ...clients.filter((client) => client.id !== currentClient.id),
      newCurrentClient,
    ];
    setClients(newClients);
    setCurrentClient(newCurrentClient);
    setCurrentReservation(undefined);
  };

  return {
    allReservations,
    clients,
    currentClient,
    currentProvider,
    currentReservation,
    handleAddSchedule,
    handleConfirmReservation,
    handleCreateReservation,
    isProviderView: navBarView === NavBarView.Provider,
    navBarView,
    numberOfReservations,
    providers,
    selectedDate,
    selectedEndDate,
    selectedProvider,
    setClients,
    setCurrentClient,
    setCurrentProvider,
    setCurrentReservation,
    setNavBarView,
    setProviders,
    setSelectedProvider,
    setSelectedDate,
    setSelectedEndDate,
  };
};
