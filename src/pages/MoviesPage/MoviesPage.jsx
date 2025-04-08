import React, { useEffect, useState } from 'react';
import { getTrendyMovies } from '../../services/api';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendyMovies(); // <- загружаем фильмы
      console.log(data); // <- смотришь в консоли, что именно вернулось
      setMovies(data); // <- сохраняешь в стейт
    };
    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>High film rating</h1>
      <div className={styles.grid}>
        {movies.map(movie => (
          <div className={movie.card} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className={movie.poster}
            />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <p className={styles.movieDate}>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
