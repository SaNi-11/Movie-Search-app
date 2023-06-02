import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
  const handleMovieClick = (movie) => {
    onMovieClick(movie);
  };

  return (
    <div>
      {movies.length > 0 ? <h2>Movie List</h2> : null}
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="card-title">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
