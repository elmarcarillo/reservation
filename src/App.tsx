import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { mockProviders } from "./data/mockProviders";
import { mockClient } from "./data/mockClient";
import { getDateString } from "./utils/date";

function App() {
  const [providers, setProviders] = useState(mockProviders());
  const [client, setClient] = useState(mockClient());

  const providerList = providers.map((provider) => (
    <div key={provider.id}>
      {provider.schedule.map((schedule) => (
        <div>
          <div key={schedule.startTime}>
            {getDateString(schedule.startTime)}
          </div>
          <div key={schedule.startTime}>{getDateString(schedule.endTime)}</div>
        </div>
      ))}
      <div>
        Client: {getDateString(client.reservation.startTime)} -{" "}
        {getDateString(client.reservation.endTime)}
      </div>
    </div>
  ));

  return <div className="App">{providerList}</div>;
}

export default App;
