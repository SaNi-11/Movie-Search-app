import { useState } from 'react';
import MovieDeatails from './MovieDeatails';
import MovieList from './MovieList';
import useMovieSearch from '../hooks/useMovieSearch';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { data } = useMovieSearch(query);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    return;
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="card-content">
      <h1>Movie Search App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for a movie..."
          className="input"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {selectedMovie ? (
        <MovieDeatails movie={selectedMovie} onBackClick={handleBackClick} />
      ) : (
        <MovieList movies={data} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
};

export default MovieSearch;
