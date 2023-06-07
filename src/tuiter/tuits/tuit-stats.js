import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { RxShare2 } from "react-icons/rx";

function TuitStats(homeTuit) {

    return (
        <div class = "container space-between">
          <li> <FaRegComment/> {homeTuit.replies} </li>
          <li><FaRetweet/> {homeTuit.retuits} </li>
          <li><HiOutlineHeart/> {homeTuit.likes} </li>
          <li> <RxShare2/> </li>
       </div>
    );
}

export default TuitStats;
