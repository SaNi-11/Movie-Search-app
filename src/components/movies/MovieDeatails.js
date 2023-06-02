import React from 'react';

const MovieDeatails = ({ movie, onBackClick }) => {
  const handleBackClick = () => {
    onBackClick();
  };

  return (
    <div className="card">
      <h2 className="card-title">Movie Details</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="card-contnet">
        <h3 className="card-title">{movie.title}</h3>
        <p className="card-release-date">{movie.release_date}</p>
        <p className="card-overview">{movie.overview}</p>
      </div>
      <button onClick={handleBackClick} className="button-primary">
        Back
      </button>
    </div>
  );
};

export default MovieDeatails;
