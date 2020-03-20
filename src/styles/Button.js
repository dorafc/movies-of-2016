import { fontSize } from './typography'
import { colors } from './colors'
import styled from "styled-components";

// various button styles

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

// close button for popup
const CloseButton = styled(Button)`
  float: right;
`

// detail button on movie listing
const DetailsButton = styled(Button)`
  float: right;
  margin-top: -25px;
`

// favorite button on movie popup
const FavoriteButton = styled(Button)`
  padding: 8px;
  border-radius: 20px;
  margin-right: 10px;
`

export { Button, CloseButton, DetailsButton, FavoriteButton }