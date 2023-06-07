import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./tuit.css";
import TuitStats from "./tuit-stats.js";


const TuitItem = (
  {
    homeTuit = {
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": `Tesla CyberTruck lands on Mars and
                picks up the Curiosity rover on its 6' bed`,
      "image": "tesla.png",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    
    }
    
  }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
        <img width={60} className="rounded-circle" src={`/images/${homeTuit.image}`}/>
     </div>
     <div className="col-10">
       <div><b>{homeTuit.userName}</b> <BsFillPatchCheckFill/> {homeTuit.handle} . {homeTuit.time}</div>
       <div>{homeTuit.tuit}</div> <br></br>
       {TuitStats(homeTuit)}
       
     </div>
   </div>
  </li>
 );
};
export default TuitItem;