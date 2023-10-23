import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { mockProviders } from "./data/mockProviders";
import { mockClient } from "./data/mockClient";
import { getDateString } from "./utils/date";
import { ProviderSchedule } from "./components/ProviderSchedule";

function App() {
  const [providers, setProviders] = useState(mockProviders());
  const [client, setClient] = useState(mockClient());

  return (
    <div className="App">
      <ProviderSchedule providers={providers} />
    </div>
  );
}

export default App;
