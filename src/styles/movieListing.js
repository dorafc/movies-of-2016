import { colors } from './colors'
import { weight } from './typography'
import styled from "styled-components";

// styles for displaying movie information
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

const Score = styled.p`
  border: solid 1px ${colors.secondaryText};
  border-radius: 30px;
  padding: 5px 10px;
  margin: 0;
  display: block;
  display: inline-block;
`

const ReleaseDate = styled.p`
  font-weight: ${weight.bold};
`

export { MovieListingDiv, PosterSmall, MovieTitle, Score, ReleaseDate }