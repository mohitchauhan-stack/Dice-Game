import styled from "styled-components"

const StartGame = () => {
  return (
    <Container className="start_game">
      <img src="./src/assets/dices.png" alt="dices_img" />
      <GameContent className="game_content">
        <H1>DICE GAME</H1>
        <Button>Play Now</Button>
      </GameContent>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1180px;
    margin: 0 auto;
    /* height: 100vh; */
`
const H1 = styled.h1`
  font-size: 5rem;
`


const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Button = styled.button`
  padding: 10px 18px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #000000;
  color: #f1f1f1;
  align-self: flex-end;
  width: 220px;
  height: 42px;
`