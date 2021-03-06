import { darken, transparentize } from "polished";

// colors generated from https://coolors.co/e8e9f3-cecece-a6a6a8-282a44-777cba
export const colorPalette = {
  white : '#ffffff',
  light : '#E8E9F3',
  medium : '#CECECE',
  dark : '#A6A6A8',
  dkBlue : '#282A44',
  lgtBlue : '#777CBA'
}

// color pallete applied to site theme
export const colors = {
  defaultText : colorPalette.dkBlue,
  secondaryText : colorPalette.lgtBlue,
  background : colorPalette.medium,
  modalBackgorund : colorPalette.white,
  modalShadow : colorPalette.dkBlue,
  modalAccent : colorPalette.lgtBlue,
  button : colorPalette.lgtBlue,
  buttonHover : darken(0.1, colorPalette.lgtBlue),
  popUpCover : transparentize(0.2, colorPalette.dkBlue)
}