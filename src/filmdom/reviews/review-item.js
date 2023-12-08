import React, {useState} from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
// import "./review.css";
//import TuitStats from "./tuit-stats.js";
import { useDispatch, useSelector } from "react-redux";
//import {TiDelete} from "react-icons/ti";
//import { deleteTuitThunk } from "../services/tuits-thunks";
import { Link } from "react-router-dom";
import {IoIosMore} from "react-icons/io";
import * as service from "../omdb-service.js";
import ReviewStats from "./review-stats.js"
import "./review.css";
import ReviewDropdownMenu from './post-dropdown.js';
import { current } from "@reduxjs/toolkit";





const ReviewItem = ( {
  review
}
) => {
  const { currentUser } = useSelector((state) => state.users);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isReviewOwner = currentUser ? review.user._id === currentUser._id : false;
  

  const dispatch = useDispatch();

  const toggleDropdown = () => {
   
    setIsDropdownOpen(!isDropdownOpen);
  }

  const deleteReviewHandler = async (id) => {
    //dispatch(deleteTuitThunk(id));
    const success = await service.deleteReview(id);
    setIsDropdownOpen(false); // Close dropdown after action

  }

  console.log("Dropdown state: ", isDropdownOpen);
  if (currentUser) {
    console.log("Current user id: ", currentUser._id);
  }

  

 return (
    <div>
    {/* <hr className="review-item-hr"/> */}
  
  <li className="list-group-item review-box">
    
        
        <div className="row">
            <div className="col-sm-3 d-none d-sm-block">
                <Link to={`/filmdom/details/${review.movie.imdbId}`} className="movie-title-poster">{
                    <div>
                        {/* <b className="movie-title-review">{review.movie.title}</b> <br/> */}
                        {/* <img className="img-fluid filmdom-poster width"src={review.movie.image}/> */}
                        <img width={150} className=" filmdom-poster width" src={review.movie.image}/>
                    </div>
                
                }</Link>
                {/* <div>{review.movie.image}</div> */}

            </div>
             <div className="col-md-9">

                <div>
                    {/* <button className="bi bi-x-lg float-end review-delete"
                      onClick={() => 
                      toggleDropdown}> */}
                      <div className="float-end review-delete">
                      <IoIosMore />

                      </div>
                      {/* </button> */}
                      {isDropdownOpen && (
                        <ReviewDropdownMenu
                          isPostOwner={isReviewOwner}
                          onDeletePost={deleteReviewHandler}
                        />
                      )}
                      {/* <div className="row"> */}
                        
                      <Link to={`/filmdom/profile/${review.user._id}`}>{
                        <div>
                        <b className="user-first-name">{review.user.firstName}</b> <span className="user-handle" > . </span> <span className="user-handle"> @{review.user.username}</span>
                        </div>
                         }</Link>
                      {/* </div> */}
                      
                </div>
                <Link to={`/filmdom/details/${review.movie.imdbId}`} className="movie-title-poster">{

                    <b className="movie-title-review">{review.movie.title}</b> 
                }</Link>

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
export default ReviewItem;