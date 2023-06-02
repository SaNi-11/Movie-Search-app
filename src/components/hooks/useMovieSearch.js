import { useState, useEffect } from 'react';

const useMovieSearch = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=aada86462b0a9a7f5c09df80ef3b39aa&query=${query}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (query.trim() !== '') {
      fetchMovies();
    } else {
      setData([]);
    }
  }, [query]);

  return { data, loading, error };
};

export default useMovieSearch;
