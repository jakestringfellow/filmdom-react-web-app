import React, {useEffect} from "react";
// import RuitItem from "./review-item.js";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsThunk } from "./review-thunks";

const ReviewList = () => {
    const { reviews, loading } = useSelector(state => state.reviews)  // grab tuits and loading flag from reducer
    const dispatch = useDispatch();                               // on component load
    useEffect(() => {                                             // invoke find tuits thunk to fetch tuits and
      dispatch(findReviewsThunk())                                  // put them in the reducer's store so we can
    }, [])                                                        // extract them with useSelector() and render
                                                                  // the tuits here
 return(
   <ul className="list-group">
     { loading &&
        <li className="list-group-item">
          Loading...
        </li>
     }
     {
    //    reviews.map(review =>
        //  <ReviewItem
        //    key={review._id} review={review}/> )
     }
   </ul>
 );
};
export default ReviewList;