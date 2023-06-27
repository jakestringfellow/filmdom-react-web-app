import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
// import "./review.css";
//import TuitStats from "./tuit-stats.js";
import { useDispatch } from "react-redux";
//import {TiDelete} from "react-icons/ti";
//import { deleteTuitThunk } from "../services/tuits-thunks";



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
   <div className="row">
     {/* <div className="col-2">
        <img width={60} className="rounded-circle" src={`/images/${tuit.image}`}/>
     </div> */}
     <div className="col-10">
       <div>
            {/* <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}> <TiDelete/> </i> */}
            <b>{review.username}</b> <i className="verified-check" > <BsFillPatchCheckFill/> </i> {review.handle} . {review.time}
        </div>
       <div>{review.review}</div> <br></br>
       {/* <TuitStats review={review}/> */}
       
     </div>
   </div>
  </li>
 );
};
export default ReviewItem;