import { Routes, Route, Link } from 'react-router-dom';
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



function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [searchlist, setSearchlist] = useState([]);

  useEffect(() => {
    let watchlist = getWatchlist();
    setWatchlist(watchlist);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", toggleMenu);
    return () => {
      document.removeEventListener("keydown", toggleMenu);
    };
  }, []);
  const toggleMenu = (e) => {
    setIsOpenMenu(!isOpenMenu);
    if (isOpenMenu && e.key === "Escape") {
      setIsOpenMenu(!isOpenMenu);
      return;
    }
    return;
  };


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
      <Routes basename='/IMDB-clone'>
        <Route path="/IMDB-clone" element={<MainPage watchlist={watchlist}
          setWatchlist={setWatchlist} />} />
        <Route path="/IMDB-clone/watchlist" element={<MovieList movieList={watchlist}
          setWatchlist={setWatchlist} />} />
        <Route path="/IMDB-clone/search" element={<MovieList movieList={searchlist}
          setWatchlist={setWatchlist} />} />
        <Route path="/IMDB-clone/top-pick" element={<MovieList movieList={searchlist}
          setWatchlist={setWatchlist} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
