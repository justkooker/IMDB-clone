import { getMovieById } from "./requests";

export const isMovieInWatchlist = (id) => {
    const watchlist = getWatchlist();
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
    if (watchlist) {
        if (watchlist.find(el => el.id === id)) return true;
        else return false;
    }

}
export const getWatchlist = () => {
    return JSON.parse(localStorage.getItem('watchlist'))
        ? JSON.parse(localStorage.getItem('watchlist'))
        : [];
}
export const addInWatchlist = async (id) => {
    const movie = await getMovieById(id);
    if (!isMovieInWatchlist(id)) {
        const watchlist = getWatchlist();
        localStorage.setItem('watchlist', JSON.stringify([...watchlist, movie]))
    } else return;
}

export const removeFromWatchlist = (id) => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist'))
    const newWatchlist = watchlist.filter(el => el.id !== id);
    localStorage.setItem('watchlist', JSON.stringify([...newWatchlist]))

}
