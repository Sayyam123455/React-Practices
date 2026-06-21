import { useState } from "react";
import Clock from "./Clock";
import "./App.css";

function App() {
  const [color, setColor] = useState("#00f7ff");

  return (
    <div className="app">
      <div className="controls">
        <button onClick={() => setColor("#00f7ff")}>Cyan</button>
        <button onClick={() => setColor("#ff00ff")}>Pink</button>
        <button onClick={() => setColor("#00ff88")}>Green</button>
        <button onClick={() => setColor("#ffd700")}>Gold</button>
      </div>

      <Clock color={color} />
    </div>
  );
}

export default App;