import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('Layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const FilmInfo = lazy(() => import('pages/FilmInfo/FilmInfo'));
const Cast = lazy(() => import('pages/FilmInfo/Cast'));
const Reviews = lazy(() => import('pages/FilmInfo/Reviews'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<FilmInfo />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
