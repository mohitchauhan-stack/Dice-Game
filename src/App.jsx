import { useState } from "react";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";

function App() {

  const [ gameStarted, setGameStarted ] = useState(false);

  const toggleGameStart = () => {
    setGameStarted( (prevVal) => !prevVal);
  }

  return (
    <>
      {gameStarted ? <GamePlay/> : <StartGame toggle={toggleGameStart}/>}
    </>
  )
}

export default App