import axios from "axios";

const request = axios.create({
    withCredentials: true,
});

export const KEY = process.env.REACT_APP_OMDB_API_KEY;
const OMDB_API = "http://www.omdbapi.com";
// localhost:4000/api
const BASE_API = "http://localhost:4000/api";//process.env.REACT_APP_API_BASE;

export const fullTextSearch = async (text) => {
    const response = await axios.get(
        `${OMDB_API}/?apikey=${KEY}&s=${text}`
    );
    return response.data;
}

export const getMovieDetails = async (imdbID) => {
    const response = await axios.get(
        `${OMDB_API}/?apikey=${KEY}&i=${imdbID}`
    );
    return response.data;
}


 export const getSeasonEpisodes = async (imdbID, seasonNumber) => {
     const response = await axios.get(
        `${OMDB_API}/?apikey=${KEY}&i=${imdbID}&season=${seasonNumber}`
     );
    return response.data.Episodes;
 }

 export const likeMovie = async (movieId, movie) => {
    const response = await request.post(
        `${BASE_API}/movies/movieId/${movieId}/like`,
        movie
    );
    return response.data
 }

 export const findMoviesILike = async () => {
    const response = await request.get(
        `http://localhost:4000/api/movies/i/like`);
    return response.data;
 }

 export const findPeopleWhoLikeMovie = async (movieId) => {
    const response = await request.get(
        `http://localhost:4000/api/movies/movieId/${movieId}/likes`
    );
    return response.data;
 };

 export const createFollow = async (followed) => {
    const response = await request.post(
        `http://localhost:4000/api/follows/followed/${followed}`
    );
    return response.data;
 }

 export const findPeopleIFollow = async () => {
    const response = await request.get(
        `http://localhost:4000/api/follows/i/followed`
    );
    return response.data;
 };

 export const findPeopleThatFollowMe = async () => {
    const response = await request.get(
        `http://localhost:4000/api/follows/followed/me`
    );
    return response.data;
 }

 export const findFollowsByFollowed = async (followed) => {
    const response = await request.get(
        `http://localhost:4000/api/follows/followed/${followed}`
    );
    return response.data;
 } 

// export const getSeasonDetails = async () => {
//     const response = await
// }

// export const getEpisodeDetails = async () => {
//     const response = await
// }