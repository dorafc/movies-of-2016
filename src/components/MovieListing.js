import React, {Component} from 'react';

/** 
  * MovieListing renders the short display of movie data used in the main listing
*/

// NOTE: the TMDb API contains a configuration API that includes information about the image URL
// and available sizes
const baseUrl = "https://image.tmdb.org/t/p/"
const imgSizeSmall = "w154"

class MovieListing extends Component{
  render(){
    return (
      <div className="movie-listing">
        <h3>{this.props.title}</h3>
        <h4>{this.props.date}</h4>
        
        {/* only render a poster if the movie data includes an image path for the poster */}
        {this.props.poster &&
          <img src={`${baseUrl}${imgSizeSmall}/${this.props.poster}`} alt={`${this.props.title} poster`} />
        }
        <p>Score: {this.props.score}</p>
        <hr />
      </div>
    )
  }
}

export default MovieListing