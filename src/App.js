import "./App.css";
import React, { useState, useEffect } from "react";
import ConvertItem from "./components/ConvertItem";

function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest")
      .then((response) => response.json())
      .then((data) => setCurrencies(Object.keys(data.rates)));
  }, []);
  return (
    <main>
      <ConvertItem currencies={currencies} />
    </main>
  );
}

export default App;
