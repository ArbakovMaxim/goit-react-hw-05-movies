import { Routes, Route } from 'react-router-dom';
import { HeaderHome } from 'components/Header/Header';
import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';
import { FilmInfo } from 'pages/FilmInfo/FilmInfo';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
/* import { useEffect, useState } from 'react';
import { apiImage } from 'services/Api'; */

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderHome />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<HeaderHome />} />
    </Routes>
  );
};
