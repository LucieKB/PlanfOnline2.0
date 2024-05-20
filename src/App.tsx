import { useEffect } from "react";
import "./App.css";
import { baseUrl } from "./urls";

function App() {
  const getUsers = async () => {
    const response = await fetch(`${baseUrl}/users`);
    const users = await response.json();
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Planf Online 2.0</h1>
    </div>
  );
}

export default App;
