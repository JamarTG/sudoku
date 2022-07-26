import "./App.css";
import React, { useState } from "react";
import Board from "./components/Board";
import ThemePalette from "./components/ThemePalette";

function App() {
  const [primaryColor, setPrimaryColor] = useState("");

  return (
    <div className="flex-h">
      <Board primaryColor={primaryColor} />
      <ThemePalette
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
      />
    </div>
  );
}

export default App;