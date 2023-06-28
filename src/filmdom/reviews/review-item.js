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




const ReviewItem = ( {
  review
}
) => {
  const dispatch = useDispatch();

  const deleteReviewHandler = async (id) => {
    //dispatch(deleteTuitThunk(id));
    const success = await service.deleteReview(id);

  }

  

 return (
  
  <li className="list-group-item">
    
        
        <div className="row">
            <div className="col-2">
                <Link to={`/filmdom/details/${review.movie.imdbId}`}>{
                    <div>
                        <b>{review.movie.title}</b>
                        <img width={60} className="" src={review.movie.image}/>
                    </div>
                
                }</Link>
            </div>
             <div className="col-10">

                <div>
                    <i className="bi bi-x-lg float-end"
                      onClick={() => deleteReviewHandler(review._id)}> <TiDelete/> </i>
                      <Link to={`/filmdom/profile/${review.user._id}`}>{
                        <div>
                        <b>{review.user.firstName}</b> <i className="verified-check" > <BsFillPatchCheckFill/> </i> @{review.user.username} . {review.time}
                        </div>
                    }</Link>
                </div>
                <div>{review.review}</div> <br></br>
                {/* <TuitStats review={review}/> */}
       
            </div>
        </div>
    
    
   
  </li>
 );
};
export default ReviewItem;