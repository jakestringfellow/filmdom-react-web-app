import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";
import TuitLiked from "./tuit-like-condition";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


function TuitStats(tuit) {

    const dispatch = useDispatch();


    return (
        <div class = "container space-between">
          <li> <FaRegComment/> {tuit.replies} </li>
          <li><FaRetweet/> {tuit.retuits} </li>

          {TuitLiked(tuit)}
            
          
          <li> <RxShare2/> </li>
       </div>
    );
}

export default TuitStats;
