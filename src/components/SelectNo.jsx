import { useState } from "react";
import styled from "styled-components";

const SelectNo = () => {

    const array = [1, 2, 3, 4, 5, 6];
    const [ selectedNo, setSelectedNo] = useState();

    return (
        <SelectNum>
            <BoxContainer className="box_container">
                {array.map( (val) =>
                    <Box key={val} onClick={() => setSelectedNo(val)}
                        $isSelected={val === selectedNo}>
                        {val}
                    </Box>)}
            </BoxContainer>
            <p>Select a Number</p>
        </SelectNum>
    )
}

export default SelectNo

const SelectNum = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* background-color: red; */

    p{
        font-size: 24px;
        font-weight: 700px;
    }
`

const BoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    background-color: ${ ( {$isSelected} ) => $isSelected ? "black" : "white"};
    color: ${ ( {$isSelected} ) => $isSelected ? "white" : "black"};
    transition: all .2s ease-in-out;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
`