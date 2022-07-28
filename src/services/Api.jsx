import axios from 'axios';
import { constantsApi } from 'constants/constants';
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: constantsApi.BASE_URL,
  params: {
    api_key: constantsApi.API_KEY,
    language: 'en-US',
    include_adult: false,
  },
});

export const getMoviesTrending = async () => {
  try {
    const movies = await api.get(`trending/movie/day`);
    if (movies) {
      return movies.data.results;
    }
    if (movies.data.results.length === 0) {
      return toast.info(
        'по вашему запросу не чего не найденно,ищите что-то адекватное. '
      );
    }
  } catch (error) {
    return toast.info(error);
  }
};

export const getMoviesCast = async id => {
  try {
    const actor = await api.get(`movie/${id}/credits`);
    if (actor) {
      return actor.data.cast;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesReviews = async id => {
  try {
    const author = await api.get(`movie/${id}/reviews`);
    if (author) {
      return author.data.results;
    }
  } catch (error) {
    return toast.info(error);
  }
};

export const getSearchMovies = async search => {
  try {
    const movies = await api.get(`search/movie`, {
      params: {
        query: search,
      },
    });
    if (movies) {
      return movies.data.results;
    }
  } catch (error) {
    toast.info(error);
  }
};

export const getMoviesInfo = async id => {
  try {
    const movies = await api.get(`movie/${id}`);
    if (movies) {
      return movies;
    }
  } catch (error) {
    return toast.info(error);
  }
};
