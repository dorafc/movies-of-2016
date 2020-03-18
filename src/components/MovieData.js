import React, {Component} from 'react';
import MovieDisplay from '../components/MovieDisplay.js'

/** 
  * Gets Data from The Movie Database (TMDb) API for use in child components
*/

const apiKey = process.env.REACT_APP_TMDB_KEY

class MovieData extends Component{

  constructor(props){
    super(props)
    this.state = {
      results : []
    }
  }



  componentDidMount(){
    // connect to TMDb to get the appropriate data
    // const releaseYear = "2016"
    // const popularity = "desc"
    
    // let movieDataJson = movieData.json()
    let movieData = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2016`)
      .then((response) => {
         return response.json()
      })
      .then(data => {
        this.setState({
          results : data.results
        })
      })
      .catch(error => console.log(error))
  }

  render(){
    console.log(this.state.results[0])
    return (
      <div className="movie-data">
        <h2>Movie Data</h2>
        <MovieDisplay />
      </div>
    )
  }
}

export default MovieData