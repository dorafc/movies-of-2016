import React, {Component} from 'react';
import MovieListing from "../components/MovieListing.js"
import MovieDetail from "../components/MovieDetail.js"
import Popup from "../components/Popup.js"

/** 
  * Movie Display component to handle presentation of movie data
*/

class MovieDisplay extends Component{
  constructor(props){
    super(props)
    this.state = {
      showDetail : null
    }
  }

  render(){
    // generate MovieListing components for each movie result passed down through props
    const listOfMovies = this.props.movies.map((movie, i) => {
      return <MovieListing 
              title={movie.title} 
              key={`movie${i}`}
              date={movie.release_date}
              score={movie.vote_count}
              poster={movie.poster_path}
              movieId={i}
            />
    })

    return(
      <div className="movie-display">
        <h3>Movie Display</h3>
        {listOfMovies}

        {/* conditionaly show the popup modal showing the full details of a movie */}
        {this.state.showDetail &&
        <Popup>
          <MovieDetail />
        </Popup>
        }
      </div>
    )
  }
}

export default MovieDisplay