import { Routes, Route } from 'react-router-dom';
import { HeaderHome } from 'components/Header/Header';
import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderHome />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
