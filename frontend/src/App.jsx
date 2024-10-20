import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const fetchName = async () => {
    try {
      const res = await fetch("/name", {
        // Match the backend route
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json(); // Await the JSON data
      setName(data.name); // Update state with the name
      console.log(data.name);
    } catch (err) {
      console.error("Error fetching name:", err);
    }
  };

  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={fetchName}>Fetch</button>
    </>
  );
}

export default App;