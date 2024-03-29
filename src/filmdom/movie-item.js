import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
// import "./review.css";
//import TuitStats from "./tuit-stats.js";
import { useDispatch } from "react-redux";
//import {TiDelete} from "react-icons/ti";
//import { deleteTuitThunk } from "../services/tuits-thunks";
import { Link } from "react-router-dom";
import {TiDelete} from "react-icons/ti";
import * as service from "../omdb-service.js";
import ReviewStats from "./review-stats.js"
import "./review.css";




const MovieItem = ( {
  movie
}
) => {
//   const dispatch = useDispatch();

//   const deleteReviewHandler = async (id) => {
//     //dispatch(deleteTuitThunk(id));
//     const success = await service.deleteReview(id);

//   }

  

 return (
    <div>
    <hr className="review-item-hr"/>
  
  <li className="list-group-item review-box">
    
        
        <div className="row">
            <div className="col-3 ">
                <Link to={`/filmdom/details/${movie.imdbId}`} className="movie-title-poster">{
                    <div>
                        <b className="movie-title-review">{movie.title}</b> <br/>
                        <img width={100} className=" img-fluid filmdom-poster width" src={movie.image}/>
                    </div>
                
                }</Link>
            </div>
             <div className="col-9">

                <div>
                    <i className="bi bi-x-lg float-end review-delete"
                      onClick={() => deleteReviewHandler(review._id)}> <TiDelete/> </i>
                      {/* <div className="row"> */}
                        
                      <Link to={`/filmdom/profile/${review.user._id}`}>{
                        <div>
                        <b className="user-first-name">{review.user.firstName}</b> <i className="user-handle" > . </i> <i className="user-handle"> @{review.user.username}</i>
                        </div>
                         }</Link>
                      {/* </div> */}
                      
                </div>
                <div className="row review-text">{review.review}</div> <br></br>
                {/* <>{review.likes} . {review.dislikes}</> */}
                <div className="row align-items-end">
                    <ReviewStats review={review} className="review-stats"/>
                </div>
       
            </div>
        </div>
    
    
   
  </li>
  </div>
 );
};
export default MovieItem;