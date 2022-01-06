import React from "react";
import Search from "./components/Search";
import { clientsData } from "./data/Data";

function App() {
  return <Search clients={clientsData} />;
}

export default App;
