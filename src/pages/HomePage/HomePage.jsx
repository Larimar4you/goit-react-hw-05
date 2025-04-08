import styles from './HomePage.module.css';

import React, { useEffect, useState } from 'react';
import { getTrendyMovies } from '../../services/api';
import { Link } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendyMovies();
        setMovies(data);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Movies</h1>
      <div className={styles.moviesGrid}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className={styles.moviePoster}
              />
              <h3 className={styles.movieTitle}>{movie.title || movie.name}</h3>
              <p className={styles.movieDate}>{movie.release_date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
