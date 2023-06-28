import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
// import "./review.css";
//import TuitStats from "./tuit-stats.js";
import { useDispatch } from "react-redux";
//import {TiDelete} from "react-icons/ti";
//import { deleteTuitThunk } from "../services/tuits-thunks";
import { Link } from "react-router-dom";



const ReviewItem = ( {
  review
}
) => {
  const dispatch = useDispatch();

//   const deleteTuitHandler = (id) => {
//     dispatch(deleteTuitThunk(id));

//   }

  

 return (
  
  <li className="list-group-item">
    <Link to={`/filmdom/details/${review.movie.imdbID}`}>{
        
        <div className="row">
            <div className="col-2">
                <b>{review.movie.title}</b>
                <img width={60} className="" src={review.movie.image}/>
            </div>
             <div className="col-10">
                <div>
                    {/* <i className="bi bi-x-lg float-end"
                      onClick={() => deleteTuitHandler(tuit._id)}> <TiDelete/> </i> */}
                    <b>{review.user.firstName}</b> <i className="verified-check" > <BsFillPatchCheckFill/> </i> @{review.user.username} . {review.time}
                </div>
                <div>{review.review}</div> <br></br>
                {/* <TuitStats review={review}/> */}
       
            </div>
        </div>
    
    }</Link>
   
  </li>
 );
};
export default ReviewItem;