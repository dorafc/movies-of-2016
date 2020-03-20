import React, {Component} from 'react';

// styled components
import { MovieListingDiv, PosterSmall, MovieTitle, Score, ReleaseDate } from "../styles/movieListing"

// NOTE: the TMDb API contains a configuration API that includes information about the image URL
// and available sizes
const baseUrl = "https://image.tmdb.org/t/p/"
const imgSizeSmall = "w154"

/**
 * <MovieListing> renders the short display of movie data used in the main listing
 * @props {number} id - unique ID of the movie from the TMDb API
 * @props {string} title - title of the movie
 * @props {number} key - unique key for generating list of components
 * @props {string} date - release date of the movie
 * @props {number} score - movie popularity rank
 * @props {string} poster - URL path to poster image
 */

class MovieListing extends Component{
  render(){
    return (
      <MovieListingDiv className="movie-listing">
        {/* only render a poster if the movie data includes an image path for the poster */}
        {this.props.poster &&
          <PosterSmall src={`${baseUrl}${imgSizeSmall}/${this.props.poster}`} alt={`${this.props.title} poster`} />
        }

        <div className="movie-meta">
          <MovieTitle>{this.props.title}</MovieTitle>
          <Score>Score: {this.props.score}</Score>
          <ReleaseDate>Released: {this.props.date}</ReleaseDate>
        </div>
        
        
      </MovieListingDiv>
    )
  }
}

export default MovieListing