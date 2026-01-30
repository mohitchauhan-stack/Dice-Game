import { useState } from "react";
import StartGame from "./components/StartGame";

function App() {

  const [ gameStarted, setGameStarted ] = useState(false);

  const toggleGameStart = () => {
    setGameStarted( (prevVal) => !prevVal);
  }

  return (
    <>
      <StartGame />
    </>
  )
}

export default App