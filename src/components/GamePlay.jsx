import styled from "styled-components"
import RoleDice from "./RoleDice"
import SelectNo from "./SelectNo"
import TotalScore from "./TotalScore"

const GamePlay = () => {
  return (
    <Main>
      <div className="top_section">
        <TotalScore/>
        <SelectNo/>
      </div>
      <RoleDice/>
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