import React, {Component} from 'react';
import MovieDisplay from '../components/MovieDisplay.js'

/** 
  * Gets data from The Movie Database (TMDb) API for use in child components
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
    // fetch data from TMDb after component mounts

    const releaseYear = "2016"          // year to search for movies
    const popularity = "desc"           // order of popularity, either desc or asc

    // array of keys containing information needed, other key value pairs will be removed from the data
    const filteredKeys = ['title', 'release_date', 'poster_path', 'vote_count', 'overview']
    
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.${popularity}&include_adult=false&include_video=false&page=1&primary_release_year=${releaseYear}`)
      .then((response) => {
        // convert to JSON
        return response.json()
      })
      .then(data => {
        // update state to include updated results
        this.setState({
          results : cleanResults(data.results, filteredKeys)
        })
      })
      .catch(error => console.log(error))
  }

  render(){
    return (
      <>
        <MovieDisplay movies={this.state.results}/>
      </>
    )
  }
}

// clean up results for use in react state
// returns an array with including only key value pairs specified in the keys parameters
function cleanResults(results, keys){
  return results.map(result => {
    let newResult = {}

    // map through the list of keys to clean up data
    keys.forEach(key => {
      newResult[key] = result[key]
    })

    return newResult;
  })
}

export default MovieData