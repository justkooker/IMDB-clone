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
import WatchlistPage from './pages/WatchlistPage/WatchlistPage';


function App() {

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    const watchlist = getWatchlist();
    setWatchlist(watchlist);
  }, []);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    return;
  };
  return (
    <>
      <Menu toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
      <Header
        toggleMenu={toggleMenu}
        isOpenMenu={isOpenMenu}
        watchlist={watchlist}
        setWatchlist={setWatchlist}
      />
      <Routes>
        <Route path="/" element={<MainPage watchlist={watchlist}
          setWatchlist={setWatchlist} />} />
        <Route path="/watchlist" element={<WatchlistPage watchlist={watchlist}
          setWatchlist={setWatchlist} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
