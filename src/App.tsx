import { useEffect } from "react";
import "./App.css";
import { baseUrl } from "./urls";

function App() {
  const fetchServer = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchServer();
  }, []);

  return (
    <div>
      <h1>Planf Online 2.0</h1>
    </div>
  );
}

export default App;
