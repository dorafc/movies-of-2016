import { robotoFamily, fontSize, weight } from './typography'
import { colors } from './colors'
import styled from "styled-components";

const Button =  styled.button`
  background-color: ${colors.button};
  border: none;
  padding: 7px 14px;
  color: #fff;
  font-size: ${fontSize.small};
  transition: background-color ease-in .2s;

  &:hover{
    background-color: ${colors.buttonHover};
  }
`

export default Button