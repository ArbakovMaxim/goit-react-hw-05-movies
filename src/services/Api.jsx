import axios from 'axios';
import { constantsApi } from 'constants/constants';

export const api = axios.create({
  baseURL: constantsApi.BASE_URL,
  params: {
    api_key: constantsApi.API_KEY,
    language: 'en-US',
    include_adult: false,
  },
});

export function getMoviesTrending() {
  return api.get(`trending/movie/day`);
}

export function getMoviesCast(id) {
  return api.get(`movie/${id}/credits`);
}

export function getMoviesReviews(id) {
  return api.get(`movie/${id}/reviews`);
}

export function getSearchMovies(search) {
  return api.get(`search/movie`, {
    params: {
      query: search,
    },
  });
}

export function getMoviesInfo(id) {
  return api.get(`movie/${id}`);
}
