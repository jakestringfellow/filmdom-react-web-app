import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as service from "./omdb-service";
import seriesDetails from "./series-details";
import { useSelector } from "react-redux";

function DetailsScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState();
    const[episodes, setEpisodes] = useState();
    const [peopleWhoLiked, setPeopleWhoLiked] = useState();
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
            genre: movieDetails.Genre
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
            genre: movieDetails.Genre
        })
    };

    // const handleReviewMovie = async () => {
    //     // const movie = await service.reviewMovie(id, {
    //     //     title: movieDetails.Title,
    //     //     imdbId: movieDetails.imdbID,
    //     //     released: movieDetails.Released,
    //     //     genre: movieDetails.Genre
    //     // })
    //     const reviewText = 
    // };

    // const reviewClickHandler = () => {
    //     const newReview = {
    //         review: reviewText
    //     }
    //     dispatch(createReviewThunk(newReview))
    // }
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

    useEffect(() => {
        fetchMovieDetails();
        findPeopleWhoLikeMovie();
        // findPeopleWhoReviewedMovie();
        // for (let seasonNumber=1; seasonNumber<movieDetails.totalSeasons+1; seasonNumber++) {
        //     fetchSeriesEpisodes(seasonNumber);
        // }
    }, []); 
    return (
        <div>
            {currentUser &&(currentUser.username)}
            {movieDetails && (
                <div>
                    <h1>{movieDetails.Title}</h1>
                    <img src={movieDetails.Poster}/>

                    <hr />
                    {currentUser && (
                        <div>
                            <button onClick={handleLikeMovie}>Like</button>
                            <button>Dislike</button>
                            <button>HEY</button>
                            
                            <textarea value={reviewText} placeholder="Type your review!"
                                className="form-control border-0 mt-2"
                                onChange={(event) => setReviewText(event.target.value)}>
                            </textarea>
                            <div>
                            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                                onClick={reviewClickHandler}>
                                Review
                             </button>
                             </div>
                        </div>
                        
                    )}
                    {
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
                    }


                    <ul className="list-group">
                        {episodes && episodes.map((episode) => (
                            <li className="list-group-item" key={episode.imdbID}>
                                {episode.Title}
                            </li>
                        ))}
                    </ul>
                    {/* {seriesDetails(movieDetails.Type)} */}
                    {/* {movieDetails.Type === "series" && (
                        seriesDetails(movieDetails.totalSeasons)
                    )} */}
                </div>
            )}
            <pre>{JSON.stringify(movieDetails,null,2)}</pre>
            
        </div>
    );
}

export default DetailsScreen;