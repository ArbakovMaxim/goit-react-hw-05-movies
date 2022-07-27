import { Routes, Route } from 'react-router-dom';
import { Layout } from 'Layout/Layout';
import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';
import { FilmInfo } from 'pages/FilmInfo/FilmInfo';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
