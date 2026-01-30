import styled from "styled-components";
import dices from '../assets/dices.png';

const StartGame = () => {
  return (
    <Container className="start_game">
      <div>
        <img src={dices} alt="dices_img" />
      </div>
      <div className="game_content">
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
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
      h1{
        font-size: 96px;
        white-space: nowrap;
      }
      button:hover{
        box-shadow: 3px 3px 3px gray;
      }
    }

`

const Button = styled.button`
  padding: 10px 18px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid white;
  background-color: #000000;
  color: #f1f1f1;
  align-self: end;
  width: 220px;
  height: 42px;
  font-size: 16px;
  transition: all .3s ease-in-out;

  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  
`