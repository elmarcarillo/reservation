import React from "react";
import "./App.css";
import { BLANK_SCHEDULES } from "./data/mockProviders";
import { Schedules } from "./components/Schedules";
import { ClientDetailsBar, ProviderDetailsBar } from "./components/DetailsBar";
import { NavBar, NavBarView } from "./components/NavBar";
import { useAppState } from "./useAppState";

function App() {
  const {
    allReservations,
    clients,
    currentClient,
    currentProvider,
    currentReservation,
    handleAddSchedule,
    handleCreateReservation,
    handleConfirmReservation,
    isProviderView,
    navBarView,
    providers,
    selectedDate,
    selectedEndDate,
    selectedProvider,
    setCurrentClient,
    setCurrentProvider,
    setCurrentReservation,
    setNavBarView,
    setSelectedProvider,
    setSelectedDate,
    setSelectedEndDate,
  } = useAppState();

  return (
    <div className="App">
      {isProviderView ? (
        <ProviderDetailsBar
          currentProvider={currentProvider}
          onAddSchedule={handleAddSchedule}
          onChangeStartDate={setSelectedDate}
          onChangeEndDate={setSelectedEndDate}
          startDate={selectedDate}
          endDate={selectedEndDate}
        />
      ) : (
        <ClientDetailsBar
          allReservations={allReservations}
          currentReservation={currentReservation}
          selectedProvider={selectedProvider}
          date={selectedDate}
          providers={providers}
          onChangeDate={setSelectedDate}
          onChangeProvider={setSelectedProvider}
          onConfirmReservation={handleConfirmReservation}
          onCreateReservation={handleCreateReservation}
        />
      )}
      <Schedules
        currentSelectedReservation={currentReservation}
        schedules={
          isProviderView
            ? currentProvider.schedules
            : selectedProvider?.schedules || BLANK_SCHEDULES
        }
        allReservations={allReservations}
        clientReservations={
          isProviderView
            ? clients
                .flatMap((client) => client.reservations)
                .filter((res) => res.providerId === currentProvider.id)
            : currentClient.reservations
        }
        onClickTimeSlot={(time, res) => {
          setSelectedDate(time);
          setCurrentReservation(res);
        }}
      />
      <NavBar
        providers={providers}
        clients={clients}
        currentView={navBarView}
        currentClient={currentClient}
        currentProvider={currentProvider}
        onChangeView={setNavBarView}
        onChangeClient={setCurrentClient}
        onChangeProvider={setCurrentProvider}
      />
    </div>
  );
}

export default App;
