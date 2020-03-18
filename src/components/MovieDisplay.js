import React, {Component} from 'react';
import MovieListing from "../components/MovieListing.js"
import MovieDetail from "../components/MovieDetail.js"
import Popup from "../components/Popup.js"
import PopupToggle from "../components/PopupToggle.js"

/** 
 * Movie Display component to handle presentation of movie data
 */

class MovieDisplay extends Component{
  constructor(props){
    super(props)
    this.state = {
      showDetail : null        // null if the detail popup is hidden, contains an index for the movie if the detail is visible
    }
  }

  /**
   * toggles if the detail pop up is visible or hidden
   */
  toggleDetail = (e, detailId) => {
    if (e){
      e.preventDefault()
    }
    this.setState({
      showDetail : detailId
    })
  }

  /**
   * return an array of <MovieListing> wrapped in a <PopupToggle> populated with Movie Data
   */
  generateMovieList(movies){
    return movies.map((movie, i) => {
      return  <PopupToggle 
                key={`toggle${i}`} 
                toggleAction={this.toggleDetail} 
                toggleTarget={i}
              >
                <MovieListing 
                  title={movie.title} 
                  key={`movie${i}`}
                  date={movie.release_date}
                  score={movie.vote_count}
                  poster={movie.poster_path}
                />
              </PopupToggle>
    })
  }

  

  render(){
    // generate MovieListing components for each movie result passed down through props
    const listOfMovies = (this.props.movies.length) ? this.generateMovieList(this.props.movies) : ''

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