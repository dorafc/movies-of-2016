import React, {Component} from 'react';
import MovieListing from "../components/MovieListing.js"
import MovieDetail from "../components/MovieDetail.js"

/** 
  * Movie Display component to handle presentation of movie data
*/

class MovieDisplay extends Component{
  render(){
    return(
      <div className="movie-display">
        <h3>Movie Display</h3>
        <MovieListing />
        <MovieDetail />
      </div>
    )
  }
}

export default MovieDisplay