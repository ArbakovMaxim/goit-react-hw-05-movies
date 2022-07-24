import { Routes, Route } from 'react-router-dom';
import { HeaderHome } from 'components/Header/Header';
import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';
import { FilmInfo } from 'pages/FilmInfo/FilmInfo';
/* import { useEffect, useState } from 'react';
import { apiImage } from 'services/Api'; */

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderHome />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<FilmInfo />} />
      </Route>
      <Route path="*" element={<HeaderHome />} />
    </Routes>
  );
};
