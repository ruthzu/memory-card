import React from "react";
import { Header } from "./components/header";

function App() {
  let currentScore=0
  let bestScore=0
  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <h1>Memory Game Working!</h1>
    </div>
  );
}

export default App;
