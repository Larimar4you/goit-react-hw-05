import styles from './HomePage.module.css';
import React, { useEffect, useState } from 'react';
import { getTrendyMovies } from '../../services/api';
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
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
