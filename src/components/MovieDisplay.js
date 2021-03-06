import React, {Component} from 'react';
import MovieListing from "../components/MovieListing.js"
import MovieDetail from "../components/MovieDetail.js"
import Popup from "../components/Popup.js"
import PopupToggle from "../components/PopupToggle.js"
import Loader from "../components/Loader.js"

/** 
 * <MovieDisplay> to handle presentation of movie data
 * @props {Object[]} movies - array of movie data
 * @props {boolean} loading - flag if data has been loaded from TMDb 
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

    // update state to reflect detail popup
    this.setState({
      showDetail : detailId
    })
  }

  /**
   * Updates favorited state for a movie based on the id from TMDb
   */
  toggleFavorite = (e, movieId, newFavorite) => {
    if (e){
      e.preventDefault()
    }

    // update state to show favorite state by unique movieId
    let favoriteKey = "favorite" + movieId
    this.setState({
      [favoriteKey] : newFavorite
    })
  }

  /**
   * return an array of <MovieListing> wrapped in a <PopupToggle> populated with Movie Data
   * @param {Object[]} movies - list of movie data objects
   */
  generateMovieList(movies){
    return movies.map((movie, i) => {
      return  <PopupToggle 
                key={`toggle${i}`} 
                toggleAction={this.toggleDetail} 
                toggleTarget={i}
                actionText="Details"
              >
                <MovieListing 
                  id={movie.id}
                  title={movie.title} 
                  key={`movie${movie.id}`}
                  date={movie.release_date}
                  score={movie.popularity}
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
        {/* Show loader graphic while the data is loading */}
        {this.props.loading &&
          <Loader />
        }
        
        {/* conditionaly show the popup modal showing the full details of a movie */}
        {this.state.showDetail !== null &&
        <Popup toggleAction={this.toggleDetail}>
          <MovieDetail 
            title={this.props.movies[this.state.showDetail].title} 
            date={this.props.movies[this.state.showDetail].release_date}
            score={this.props.movies[this.state.showDetail].popularity}
            poster={this.props.movies[this.state.showDetail].poster_path}
            overview={this.props.movies[this.state.showDetail].overview}
            toggleFavorite={this.toggleFavorite}
            id={this.props.movies[this.state.showDetail].id}
            favorite={this.state["favorite" + this.props.movies[this.state.showDetail].id] || false}
          />
        </Popup>
        }

        {listOfMovies}
      </div>
    )
  }
}

export default MovieDisplay