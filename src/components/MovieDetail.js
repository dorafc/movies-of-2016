import React, {Component} from 'react';

/** 
  * MovieDetail renders full information about the movie
*/

// NOTE: the TMDb API contains a configuration API that includes information about the image URL
// and available sizes
const baseUrl = "https://image.tmdb.org/t/p/"
const imgSizeSmall = "w300"

class MovieDetail extends Component{
  render(){
    return (
      <div className="movie-detail">
        <h3>{this.props.title}</h3>
        <h4>{this.props.date}</h4>

        {/* only render a poster if the movie data includes an image path for the poster */}
        {this.props.poster &&
          <img src={`${baseUrl}${imgSizeSmall}/${this.props.poster}`} alt={`${this.props.title} poster`} />
        }
        
        <p>Score: {this.props.score}</p>
        <p>{this.props.overview}</p>

        {/* Favorite Toggle Button */}
        <button onClick={(e) => this.props.toggleFavorite(e, this.props.id, !this.props.favorite)}>
          {(this.props.favorite) ? "Unfavorite" : "Favorite"}
        </button>

        <hr />
      </div>
    )
  }
}

export default MovieDetail