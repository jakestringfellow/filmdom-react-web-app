import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { RxShare2 } from "react-icons/rx";
import TuitLiked from "./tuit-like-condition";

function TuitStats(homeTuit) {



    return (
        <div class = "container space-between">
          <li> <FaRegComment/> {homeTuit.replies} </li>
          <li><FaRetweet/> {homeTuit.retuits} </li>

          {TuitLiked(homeTuit)}
            
          
          <li> <RxShare2/> </li>
       </div>
    );
}

export default TuitStats;
