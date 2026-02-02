import { useState } from "react";
import styled from "styled-components";
import { Button, OutlineBtn } from "../styled/Button";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import SelectNo from "./SelectNo";
import TotalScore from "./TotalScore";

const GamePlay = () => {
    const [ score, setScore ] = useState(0);
    const [ selectedNo, setSelectedNo ] = useState();
    const [ currDice, setCurrDice ] = useState(1);
    const [ error, setError ] = useState("");
    const [ showRules, setShowRules ] = useState(false);

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

    const resetScore = () => {
      setScore(0);
    }



  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score}/>
        <SelectNo selectedNo={selectedNo} setSelectedNo={setSelectedNo} error={error} setError={setError}/>
      </div>
      <RoleDice currDice={currDice} rollDice={rollDice}/>
      <div className="btns_container">
        <OutlineBtn onClick={resetScore}>Reset Game</OutlineBtn>
        <Button onClick={ () => setShowRules( (prev) => !prev)}> {showRules ? "Hide" : "Show" } Rules</Button>
      </div>
      { showRules && <Rules/> }
    </Main>

  )
}

export default GamePlay

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  height: 100vh;
  max-width: 1180px;
  margin: 0 auto;

  .top_section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .btns_container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    align-items: flex-start;
  }
`