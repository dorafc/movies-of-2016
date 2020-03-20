import { colors } from './colors'
import styled from "styled-components";

// styles for the popup

const PopupDiv =  styled.div`
  background-color: ${colors.modalBackgorund};
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0px 1px 2px -1px ${colors.modalShadow};
  border-radius: 2px;
  border-top: solid 8px ${colors.modalAccent}
`

const PopupWrap = styled.div`
  background-color: ${colors.popUpCover};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px;
`

export { PopupDiv, PopupWrap }