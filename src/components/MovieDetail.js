import React, {Component} from 'react'

// styled components
import { MovieListingDetail, PosterMed, MovieTitle, Score, ReleaseDate } from "../styles/movieListing"
import { FavoriteButton } from '../styles/button'

// NOTE: the TMDb API contains a configuration API that includes information about the image URL
// and available sizes. In a production, it might make sense to call and cache the data, but for the context
// of this small app, i've saved this data here
const baseUrl = "https://image.tmdb.org/t/p/"
const imgSizeMed = "w300"

/**
 * <MovieDetail> renders full information about the movie
 * @props {string} title - title of the moview
 * @props {string} date - release date of the movie
 * @props {number} score - movie popularity rank
 * @props {string} poster - URL path to poster image
 * @props {string} overview - written descirption of the moview
 * @props {function()} toggleFavorite - update Favorite status in parent component
 * @props {number} id - unique ID of the movie from the TMDb API
 * @props {boolean} favorite - favorited status of movie 
 */

class MovieDetail extends Component{
  render(){
    return (
      <MovieListingDetail className="movie-detail">
        {/* only render a poster if the movie data includes an image path for the poster */}
        {this.props.poster &&
          <PosterMed src={`${baseUrl}${imgSizeMed}/${this.props.poster}`} alt={`${this.props.title} poster`} />
        }

        <div className="movie-meta">
          <MovieTitle>{this.props.title}</MovieTitle>
          {/* Favorite Toggle Button */}
          <FavoriteButton onClick={(e) => this.props.toggleFavorite(e, this.props.id, !this.props.favorite)}>
            {(this.props.favorite) ? "★" : " ☆"}
          </FavoriteButton>
          <Score>Score: {this.props.score}</Score>
          <ReleaseDate>Release Date: {this.props.date}</ReleaseDate>

          <p>{this.props.overview}</p>
        </div>

      </MovieListingDetail>
    )
  }
}

export default MovieDetail