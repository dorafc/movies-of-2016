import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { robotoFamily, fontSize } from './typography'
import { colors } from './colors'

// global styles applied accross components
export const Global = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
  color: ${colors.defaultText};
  background-color: ${colors.background};
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${robotoFamily};
  padding: 20px;
}

h1{
  font-size: ${fontSize.h1}
}

h2{
  font-size: ${fontSize.h2}
}

h3{
  font-size: ${fontSize.h3}
}

h4{
  font-size: ${fontSize.h4}
}

h5{
  font-size: ${fontSize.h5}
}

p{
  font-size: ${fontSize.p}
}
`

export default Global