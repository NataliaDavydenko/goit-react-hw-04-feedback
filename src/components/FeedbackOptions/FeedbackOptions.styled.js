import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  font-size: 16px;
  background-color: transparent;
  border: 1px black solid;
  border-radius: 10px;
  cursor: pointer;
  transition: color 250ms linear;
  transition: background-color 250ms linear;

  &:hover{
    background-color:#DCDCDC;
    border-color:#DCDCDC;
  }

  &.good:hover {
    color: green;
  }
  &.bad:hover {
    color: tomato;
  }
  &.neutral:hover {
    color: #ffd800;
  }
`;
