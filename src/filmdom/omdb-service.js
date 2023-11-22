import axios from "axios";

const request = axios.create({
    withCredentials: true,
});

export const KEY = process.env.REACT_APP_OMDB_API_KEY;
const OMDB_API = "https://www.omdbapi.com";
// localhost:4000/api
const BASE_API = process.env.REACT_APP_API_BASE_LOCAL;

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
        `${BASE_API}/movies/i/like`);
    return response.data;
 }

 export const findPeopleWhoLikeMovie = async (movieId) => {
    const response = await request.get(
        `${BASE_API}/movies/movieId/${movieId}/likes`
    );
    return response.data;
 };


export const reviewMovie = async (movieId, movie, reviewString) => {
    console.log("reviewString", reviewString);
     const response = await request.post(
         `${BASE_API}/movies/movieId/${movieId}/review`,
         {movie, reviewString}
     );
     return response.data
  }

  export const findReviews = async ()     => {
    console.log("Made it this far")
     const response = await axios.get(
         `${BASE_API}/reviews`
     ); 
     const reviews = response.data;                    
     return reviews;                                   
 }

  export const findMyReviews = async () => {
     const response = await request.get(
         `${BASE_API}/movies/i/review`);
     return response.data;
  }

  export const findUserReviews = async (id) => {
    const response = await request.get(
        `${BASE_API}/movies/user/${id}/review`);
    return response.data;
  }

  export const findFollowedReviews = async () => {
    const response = await request.get(
        `${BASE_API}/movies/following/review`);
    return response.data;
  }


  export const findMovieReviews = async (movieId) => {
    const response = await request.get(
        `${BASE_API}/movies/movieId/${movieId}/reviews`
    );
    return response.data;
  }

  export const findReviewForMovie = async (movieId) => {
     const response = await request.get(
         `${BASE_API}/movies/movieId/${movieId}/reviews`
     );
     return response.data;
  };






 export const createFollow = async (followed) => {
    const response = await request.post(
        `${BASE_API}/follows/followed/${followed}`
    );
    return response.data;
 }

 export const findPeopleIFollow = async () => {
    const response = await request.get(
        `${BASE_API}/follows/i/followed`
    );
    return response.data;
 };

 export const findPeopleWhoFollowMe = async () => {
    const response = await request.get(
        `${BASE_API}/follows/i/followed/me`
    );
    return response.data;
 }

 export const findFollowsByFollowed = async (followed) => {
    const response = await request.get(
        `${BASE_API}/follows/followed/${followed}`
    );
    return response.data;
 } 

 export const findFollowsByFollower = async (follower) => {
    const response = await axios.get(
        `${BASE_API}/follows/follower/${follower}`
    );
    return response.data;
 }

 export const findMovieById = async (id) => {
    const response = await axios.get(
        `${BASE_API}/movies/${id}`
    );
    return response.data;
 }

 export const deleteReview = async (id) => {
    const response = await request.delete(
        `${BASE_API}/reviews/${id}`
    );
    return response.data;
 }

 export const updateReview = async (review) => {         
    const response = await request                    
        .put(`${BASE_API}/reviews/${review._id}`, review);      
    return review;                                    
}  

export const getUserById = async (id) => {
    console.log("Fetching user")
    const response = await axios.get(`${BASE_API}/users/${id}`);
    return response.data;
}

// export const getSeasonDetails = async () => {
//     const response = await
// }

// export const getEpisodeDetails = async () => {
//     const response = await
// }