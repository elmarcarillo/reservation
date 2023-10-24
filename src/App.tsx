import React, { useState } from "react";
import "./App.css";
import { mockProviders } from "./data/mockProviders";
import { mockClients } from "./data/mockClients";
import { Schedules } from "./components/Schedules";
import { DetailsBar } from "./components/DetailsBar";
import { Reservation } from "./types/client";
import { getBeginningOfDay } from "./utils/date";

function App() {
  const [providers, setProviders] = useState(mockProviders());
  const [clients, setClients] = useState(mockClients());
  const [currentReservation, setCurrentReservation] = useState<
    Reservation | undefined
  >(undefined);
  const [selectedDate, setSelectedDate] = useState(getBeginningOfDay());

  return (
    <div className="App">
      <DetailsBar
        date={selectedDate}
        onChangeDate={(e) => {
          setSelectedDate(e);
        }}
      />
      <Schedules
        schedules={providers[0].schedules}
        reservations={clients[0].reservations}
        onClickTimeSlot={(time, res) => {
          setSelectedDate(time);
          setCurrentReservation(res);
        }}
      />
    </div>
  );
}

export default App;
