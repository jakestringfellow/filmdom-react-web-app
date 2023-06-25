import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as service from "./omdb-service";
import seriesDetails from "./series-details";
import { useSelector } from "react-redux";

function DetailsScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState();
    const[episodes, setEpisodes] = useState();
    const fetchMovieDetails = async () => {
        const movie = await service.getMovieDetails(id);
        setMovieDetails(movie);
    }
    // const fetchSeriesEpisodes = async (seasonNumber) => {
    //     let seasons = [];
    //     const episodes = await service.getSeasonEpisodes(id, seasonNumber);
    //     seasons.push(episodes);
    //     setEpisodes(seasons);
    // }

    useEffect(() => {
        fetchMovieDetails();
        // for (let seasonNumber=1; seasonNumber<movieDetails.totalSeasons+1; seasonNumber++) {
        //     fetchSeriesEpisodes(seasonNumber);
        // }
    }, []); 
    return (
        <div>
            {currentUser.username}
            {movieDetails && (
                <div>
                    <h1>{movieDetails.Title}</h1>
                    <img src={movieDetails.Poster}/>
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