import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { mockProviders } from "./data/mockProviders";
import { mockClient } from "./data/mockClient";
import { ProviderSchedules } from "./components/ProviderSchedules";

function App() {
  const [providers, setProviders] = useState(mockProviders());
  const [client, setClient] = useState(mockClient());

  return (
    <div className="App">
      <ProviderSchedules schedules={providers[0].schedules} />
    </div>
  );
}

export default App;
