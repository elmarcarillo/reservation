import React, { useState } from "react";
import "./App.css";
import { mockProviders } from "./data/mockProviders";
import { mockClients } from "./data/mockClients";
import { Schedules } from "./components/Schedules";

function App() {
  const [providers, setProviders] = useState(mockProviders());
  const [clients, setClients] = useState(mockClients());

  return (
    <div className="App">
      <Schedules
        schedules={providers[0].schedules}
        reservations={clients[0].reservations}
      />
    </div>
  );
}

export default App;
