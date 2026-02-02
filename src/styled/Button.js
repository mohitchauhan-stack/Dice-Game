import styled from "styled-components";

export const Button = styled.button`
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
  transition: all .2s ease-in-out;

  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    box-shadow: 3px 3px 3px gray;
  }
  
`

export const OutlineBtn = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all .2s ease-in-out;

  &:hover{
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`