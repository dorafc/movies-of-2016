import React from 'react';
import MovieData from '../components/MovieData.js'

/**
 * App component is the top level parent component
 */

function App() {
  return (
    <div className="movie-app">
      <h1>Movies of 2016</h1>
      <MovieData />
    </div>
  );
}

export default App;
