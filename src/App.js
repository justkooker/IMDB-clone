import { Routes, Route } from 'react-router-dom';
import { getWatchlist } from './helpers/localStorage';
import Header from './layout/Header';
import Menu from './components/Menu';
import Footer from './layout/Footer/Footer';
import MainPage from './pages/MainPage';

import './styles/vars.scss';
import './styles/normalize.scss';
import './styles/commonStyles.scss';
import './App.scss';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import { getTopRatedMovies } from './helpers/requests';



function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [searchlist, setSearchlist] = useState([]);
  const [topPickMovies, setTopPickMovies] = useState([]);

  useEffect(() => {
    let watchlist = getWatchlist();
    setWatchlist(watchlist);
    getTopRatedMovies().then(movies => setTopPickMovies(movies))
  }, []);


  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    return;
  };
  const closeMenuByEsc = (e) => {
    if (isOpenMenu && e.key === "Escape") {
      setIsOpenMenu(!isOpenMenu);
      return;
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", closeMenuByEsc);
    return () => {
      document.removeEventListener("keydown", closeMenuByEsc);
    };
  }, []);

  return (
    <>
      <Menu toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
      <Header
        toggleMenu={toggleMenu}
        isOpenMenu={isOpenMenu}
        watchlist={watchlist}
        setSearchlist={setSearchlist}
        setWatchlist={setWatchlist}
      />
      <Routes basename='/imdb-clone'>
        <Route path="/imdb-clone" element={<MainPage watchlist={watchlist}
          setWatchlist={setWatchlist} topPickMovies={topPickMovies} />} />
        <Route path="/imdb-clone/watchlist" element={<MovieList movieList={watchlist}
          setWatchlist={setWatchlist} />} />
        <Route path="/imdb-clone/search" element={<MovieList movieList={searchlist}
          setWatchlist={setWatchlist} />} />
        <Route path="/imdb-clone/top-pick" element={<MovieList movieList={topPickMovies}
          setWatchlist={setWatchlist} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
