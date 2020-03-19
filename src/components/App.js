import React from 'react';
import MovieData from '../components/MovieData'

// styled components
import { Global } from '../styles/Global'
 
/**
 * App component is the top level parent component
 */

function App() {
  return (
    <>
      <Global/>
      <div className="movie-app">
        <h1>Movies of 2016</h1>
        <MovieData />
      </div>
    </>
  );
}

export default App;
