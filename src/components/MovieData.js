import React, {Component} from 'react';
import MovieDisplay from '../components/MovieDisplay.js'

/** 
  * Gets Data from The Movie Database (TMDb) API for use in child components
*/

class MovieData extends Component{
  render(){
    return (
      <div className="movie-data">
        <h2>Movie Data</h2>
        <MovieDisplay />
      </div>
    )
  }
}

export default MovieData