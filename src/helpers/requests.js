const baseUrl = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieById = (id) => {
    return fetch(`${baseUrl}/movie/${id}?api_key=1e5ce310b13e54a49c5d34c28a1fb385`)
        .then(response => response.json())
        .then(data => data)
}