
const baseUrl = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

export const getPopularMovies = () => {
    return fetch(`${baseUrl}movie/popular?api_key=1e5ce310b13e54a49c5d34c28a1fb385`)
        .then(response => response.json())
        .then(data => data.results)
}
export const getTopRatedMovies = () => {
    return fetch(`${baseUrl}movie/top_rated?api_key=1e5ce310b13e54a49c5d34c28a1fb385`)
        .then(response => response.json())
        .then(data => data.results)
}
export const getMovieById = (id) => {
    return fetch(`${baseUrl}/movie/${id}?api_key=1e5ce310b13e54a49c5d34c28a1fb385`)
        .then(response => response.json())
        .then(data => data)
}
export const getMoviesByQuery = (query, selectType) => {
    if (selectType === 'companies') {
        return fetch(`${baseUrl}/search/company?api_key=1e5ce310b13e54a49c5d34c28a1fb385&query=${query}&page=1`)
            .then(response => response.json())
            .then(data => data.results)
    } else if (selectType === 'titles') {
        return fetch(`${baseUrl}/search/movie?api_key=1e5ce310b13e54a49c5d34c28a1fb385&query=${query}&page=1`)
            .then(response => response.json())
            .then(data => data.results)
    } else if (selectType === 'celebs') {
        return fetch(`${baseUrl}/search/person?api_key=1e5ce310b13e54a49c5d34c28a1fb385&query=${query}&page=1`)
            .then(response => response.json())
            .then(data => data.results)
    } else if (selectType === 'tv') {
        return fetch(`${baseUrl}/search/tv?api_key=1e5ce310b13e54a49c5d34c28a1fb385&query=${query}&page=1`)
            .then(response => response.json())
            .then(data => data.results)
    } else if (selectType === 'all') {
        return fetch(`${baseUrl}/search/multi?api_key=1e5ce310b13e54a49c5d34c28a1fb385&query=${query}&page=1`)
            .then(response => response.json())
            .then(data => data.results)

    }

}