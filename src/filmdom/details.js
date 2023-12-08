import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as service from "./omdb-service";
import seriesDetails from "./series-details";
import { useSelector } from "react-redux";
import ReviewItem from "./reviews/review-item";

function DetailsScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState();
    // const[episodes, setEpisodes] = useState();
    const [peopleWhoLiked, setPeopleWhoLiked] = useState();
    const [movieReviews, setMovieReviews] = useState();
    let [reviewText, setReviewText] = useState('');
    // const [peopleWhoReviewed, setPeopleWhoReviewed] = useState();

    const fetchMovieDetails = async () => {
        const movie = await service.getMovieDetails(id);
        setMovieDetails(movie);
    }

    const reviewClickHandler = async () => {
        const newReview = await service.reviewMovie(id, {
            title: movieDetails.Title,
            imdbId: movieDetails.imdbID,
            released: movieDetails.Released,
            genre: movieDetails.Genre,
            image: movieDetails.Poster
        }, reviewText)
        // {}
        //     review: reviewText
        // }
    };

    const handleLikeMovie = async () => {
        const movie = await service.likeMovie(id, {
            title: movieDetails.Title,
            imdbId: movieDetails.imdbID,
            released: movieDetails.Released,
            genre: movieDetails.Genre,
            image: movieDetails.Poster
        })
    };

    
    
    // const fetchSeriesEpisodes = async (seasonNumber) => {
    //     let seasons = [];
    //     const episodes = await service.getSeasonEpisodes(id, seasonNumber);
    //     seasons.push(episodes);
    //     setEpisodes(seasons);
    // }

    const findPeopleWhoLikeMovie = async () => {
        const people = await service.findPeopleWhoLikeMovie(id);
        setPeopleWhoLiked(people);
    };

    // const findPeopleWhoReviewedMovie = async () => {
    //     const people = await service.findPeopleWhoLikeMovie(id);
    //     setPeopleWhoReviewed(people);
    // }

    const findMovieReviews = async () => {
        const reviews = await service.findMovieReviews(id);
        setMovieReviews(reviews);
    }

    useEffect(() => {
        fetchMovieDetails();
        findPeopleWhoLikeMovie();
        findMovieReviews();
        // findPeopleWhoReviewedMovie();
        // for (let seasonNumber=1; seasonNumber<movieDetails.totalSeasons+1; seasonNumber++) {
        //     fetchSeriesEpisodes(seasonNumber);
        // }
    }, []); 
    return (
        <div>
            {movieDetails && (
                <div>
                    <h1 className="home-header">{movieDetails.Title}</h1>
                    <div className="row">
                        <div className="col-3"> 
                                            <img className="img-fluid filmdom-poster width"src={movieDetails.Poster}/>
                        </div>
                        <div className="col-8"> 
                            <div className="row">
                                <p className="user-handle">{movieDetails.Genre}</p>
                            </div>
                            <div className="row">
                            <p className="user-handle movie-plot">{movieDetails.Plot}</p>
                            </div>
                            <div className="row">
                                <div className="column-4">
                                <p className="user-handle">{movieDetails.Rating}</p>

                                </div>
                                <div className="column-4">
                                <p className="user-handle">{movieDetails.Runtime}</p>
                                </div>
                                <div className="column-4">
                                    <p className="user-handle">Released: {movieDetails.Released}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    {currentUser && (
                        <div>
                            <button className="btn login-button" onClick={handleLikeMovie}>Favorite</button>
                            <div className="row">
                                <div className="col-6">
                                        <textarea value={reviewText} placeholder="Type your review!"
                                        className="form-control border-0 mt-2 review-field"
                                        onChange={(event) => setReviewText(event.target.value)}>
                                    </textarea>
                                </div>
                                <div className="col-2">
                                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold login-button"
                                    onClick={reviewClickHandler}>
                                    Review
                                </button>

                                </div>

                            </div>
                            
                            
                            <div>
                            
                             </div>
                        </div>
                        
                    )}

{peopleWhoLiked && (
                    <div>
                        <div className="col-4">
                      <div class="dropdown">
                          {/* <span>{peopleWhoFollowMe.length} Followers </span> */}
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{peopleWhoLiked.length} Favorited</button>
                          <div class="dropdown-content">
                          <div className="list-group">
                              {peopleWhoLiked &&
                                peopleWhoLiked.map((person) => (
                                  <Link
                                    to={`/filmdom/profile/${person._id}`}
                                    className="list-group-item"
                                    key={person._id}
                                  >
                                    <p className="profile-follow-link">{person.firstName} <br/> @{person.username}</p>
                                  </Link>
                                ))}
                            </div>
                      </div>
                </div>
              </div>
                    </div>
                )}

                    {/* {
                        peopleWhoLiked && (
                            <div>
                                <h2>People who like this movie</h2>
                                <div className="list-group">
                                    {peopleWhoLiked.map((person) => (
                                        <Link className="link-group-item" to={`/filmdom/profile/${person._id}`} key={person._id}>{person.username}</Link>
                                    ))}
                                </div>
                            </div>
                        )
                    } */}


                    {/* <ul className="list-group">
                        {episodes && episodes.map((episode) => (
                            <li className="list-group-item" key={episode.imdbID}>
                                {episode.Title}
                            </li>
                        ))}
                    </ul> */}
                    {/* {seriesDetails(movieDetails.Type)} */}
                    {/* {movieDetails.Type === "series" && (
                        seriesDetails(movieDetails.totalSeasons)
                    )} */}

                        {
                        movieReviews && 
                        movieReviews.map((review) => (

                        <ReviewItem review={review}/>
                        // <Link to={`/filmdom/details/${review.movie.imdbId}`} className="list-group-item" key={review.movie._id}>
                        // <h4>{review.movie.title}</h4>

                        // <li>{review.review}</li>
                        // </Link>
                        
                        ))
                    }
                </div>
            )}
            {/* <pre>{JSON.stringify(movieDetails,null,2)}</pre> */}
            
        </div>
    );
}

export default DetailsScreen;