import { robotoFamily, fontSize, weight } from './typography'
import { colors } from './colors'
import styled from "styled-components";

const MovieListingDiv = styled.div`
  display: flex;
`

const PosterSmall = styled.img`
  margin-right: 20px;
`

const MovieTitle = styled.h3`
  margin: 0 0 13px 0;
  &:before{
    content: "🎞️ ";
  }
`

export { MovieListingDiv, PosterSmall, MovieTitle }