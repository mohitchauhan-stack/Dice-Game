import styled from "styled-components";

const RoleDice = ({currDice, rollDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`src/assets/dice_${currDice}.png`} alt="dice_1" />
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