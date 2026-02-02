
import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play the dice game:</h2>
        <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After click on dice if selected number is equal to dice number, <br /> you will get the same point as dice {" "}</li>
            <li>If you get wrong guess, then 1 point will be deducted</li>
        </ul>
    </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`
    background-color: #faf1f1;
    padding: 24px;


    h2{
        font-size: 24px;
        margin-bottom: 10px;
    }

    ul{
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-inline-start: 15px;
    }
`