import { useState } from "react";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import SelectNo from "./SelectNo";
import TotalScore from "./TotalScore";

const GamePlay = () => {
    const [ score, setScore ] = useState(0);
    const [ selectedNo, setSelectedNo ] = useState(1);
    const [ currDice, setCurrDice ] = useState(1);
    const [ error, setError ] = useState("");

    const genRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const rollDice = () => {
      if(!selectedNo){
        setError("You have not selected any number!")
        return;
      }
        const randomNumber = genRandomNum(1, 7);
        setCurrDice( (prevData) => randomNumber);


        if( selectedNo === randomNumber) {
          setScore( (prevVal) => prevVal + randomNumber);
        }else {
          setScore( (prevVal) => prevVal - 1);
        }
        setSelectedNo(undefined);
    }



  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score}/>
        <SelectNo selectedNo={selectedNo} setSelectedNo={setSelectedNo} error={error} setError={setError}/>
      </div>
      <RoleDice currDice={currDice} rollDice={rollDice}/>
    </Main>

  )
}

export default GamePlay

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 50px;
  height: 100vh;
  max-width: 1180px;
  margin: 0 auto;
  /* background-color: red; */

  .top_section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`