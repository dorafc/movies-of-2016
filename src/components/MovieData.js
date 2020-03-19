import React, {Component} from 'react';
import MovieDisplay from '../components/MovieDisplay.js'

// API key stored in .env file
const apiKey = process.env.REACT_APP_TMDB_KEY

/**
 * <MovieData> fetches and manages data from The Movie Database (TMDb) API for use in child components
 */

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
    const filteredKeys = ['title', 'release_date', 'poster_path', 'popularity', 'overview', 'id']
    
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.${popularity}&include_adult=false&include_video=false&page=1&primary_release_year=${releaseYear}`)
      .then((response) => {
        // convert to JSON
        return response.json()
      })
      .then(data => {
        // clean up data through filtering only neccesary keys and changing the date format
        let newResults = cleanResults(data.results, filteredKeys)
        cleanDates(newResults, 'release_date')

        // update state to include updated results
        this.setState({
          results : newResults
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

/**
 * clean up results for use in react state
 * returns an array with including only key value pairs specified in the keys parameters
 * @param {Object[]} results - full results returned from the API endpoint
 * @param {string[]} keys - array of keys of data to be included in the app
 */
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

 /**
  * takes a date string and returns a string in a more human readable form
  * @param {Object[]} results - array of movie objects
  * @param {string} date - key for the value that will be updated to a date string
  */
function cleanDates(results, date){
  return results.map(result => {
    //  generate new date string
    let newDate = new Date(result[date]).toDateString()
    result[date] = newDate
    return result
  })
}

export default MovieData