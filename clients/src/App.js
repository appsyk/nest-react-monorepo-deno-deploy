import "./App.css";

import { useEffect, useState } from "react";

import axios from "axios";
import logo from "./logo.svg";

function App() {
  const [data, setData] = useState();
  const url = "http://localhost:5000";

  async function getapi() {
    axios({
      url: `${url}/test`,
      method: "GET",
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(6523, res.data.data);
        setData(res.data.data);
      })

      // Catch errors if any
      .catch((err) => console.error("Error::", err));
  }

  useEffect(() => {
    getapi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Get data from server</p>
        {"Backend server text => "} {data}
      </header>
    </div>
  );
}

export default App;
