import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmEwYTU2Yjg1YWFhMTE3NDdkOTVlOWZiMGMzNzBkNyIsIm5iZiI6MTc0NDAzODA0My4xMzMsInN1YiI6IjY3ZjNlODliNmMzNTgzYzk3NTk5MzNlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pTzZujgOwbMjCe6HQoTBwMqQDl7ubn3p4AsDl19BSzA',
  },
});

//Trending movies
export const getTrendyMovies = async () => {
  const response = await api.get('/trending/movie/day');
  return response.data.results;
};

//Search movies
export const searchMovies = async query => {
  const response = await api.get(`/search/movie`, {
    params: { query },
  });
  return response.data.results;
};

//Movie details
export const getMovieDetails = async movieId => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

//Movie credits
export const getMovieCredits = async movieId => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data;
};

//Movie reviews
export const getMovieReviews = async movieId => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
