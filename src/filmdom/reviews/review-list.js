import React, {useEffect} from "react";
import TuitItem from "../../tuiter/tuits/tuit-item";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../tuiter/services/tuits-thunks";

const ReviewList = () => {
    const { tuits, loading } = useSelector(state => state.tuits)  // grab tuits and loading flag from reducer
    const dispatch = useDispatch();                               // on component load
    useEffect(() => {                                             // invoke find tuits thunk to fetch tuits and
      dispatch(findTuitsThunk())                                  // put them in the reducer's store so we can
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
       tuits.map(tuit =>
         <TuitItem
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};
export default ReviewList;