
import styled from "styled-components";
import dices from "../assets/dices.png";
import { Button } from "../styled/Button";

const StartGame = ( {toggle} ) => {
  return (
    <Container className="start_game">
      <div>
        <img src={dices} alt="dices_img" />
      </div>
      <div className="game_content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1180px;
    margin: 0 auto;
    height: 100vh;

    .game_content {
      display: flex;
      flex-direction: column;
      h1{
        font-size: 96px;
        white-space: nowrap;
      }
    }

`

