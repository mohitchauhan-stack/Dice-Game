import styled from "styled-components";
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const RoleDice = ({currDice, rollDice}) => {
  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={diceImages[currDice - 1]} alt="dice" />
        </div>
        <p>Click on the dice to roll.</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`