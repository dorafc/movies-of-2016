import { fontSize } from './typography'
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

const CloseButton = styled(Button)`
  float: right;
`

const DetailsButton = styled(Button)`
  float: right;
  margin-top: -25px;
`

const FavoriteButton = styled(Button)`
  padding: 8px;
  border-radius: 20px;
  margin-right: 10px;
`

export { Button, CloseButton, DetailsButton, FavoriteButton }