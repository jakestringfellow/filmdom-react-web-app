import axios from "axios";

export const KEY = process.env.REACT_APP_OMDB_API_KEY;
const OMDB_API = "http://www.omdbapi.com";

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
// export const getSeasonDetails = async () => {
//     const response = await
// }

// export const getEpisodeDetails = async () => {
//     const response = await
// }