import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { mockProviders } from "./data/mockProviders";

function App() {
  const [providers, setProviders] = useState(mockProviders());

  const providerList = providers.map((provider) => (
    <div key={provider.id}>
      {provider.schedule.map((schedule) => (
        <div key={schedule.startTime}>
          {new Date(schedule.startTime).toUTCString()}
        </div>
      ))}
    </div>
  ));

  return <div className="App">{providerList}</div>;
}

export default App;
