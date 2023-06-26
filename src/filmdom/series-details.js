// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import * as service from "./omdb-service";



// const seriesDetails = (totalSeasons) => {
//     // const [results, setResults] = useState();
//     const {id} = useParams();

//     let seriesSeasons = [];
//     for (let i = 0; i < totalSeasons; i++) {
//         seriesSeasons.push(i+1);
//     }
//     const episodes = seriesSeasons.map(season => service.getSeasonEpisodes(id, season));

//     // const seasonDetails = async () => {
//     //     const response = await service.getSeasonEpisodes(id, seasonNumber);
//     //     setResults(response);
//     // };
//     // useEffect(() => {
//     //     seasonDetails();
//     // }, []);

 
//     return (
//       <h2>Series!!!!!!!</h2>);
    
//    };
// export default seriesDetails;