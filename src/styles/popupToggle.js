import { colors } from './colors'
import styled from "styled-components";

// Styles for popop toggle component
const PopupToggleDiv =  styled.div`
  background-color: ${colors.modalBackgorund};
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0px 1px 2px -1px ${colors.modalShadow};
  border-radius: 2px;
  border-top: solid 8px ${colors.modalAccent};
`

export default PopupToggleDiv