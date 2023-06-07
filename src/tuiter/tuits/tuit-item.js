import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./tuit.css";
import TuitStats from "./tuit-stats.js";
import {deleteTuit} from "./tuits-reducer";
import { useDispatch } from "react-redux";
import {TiDelete} from "react-icons/ti";



const TuitItem = (
  {
    tuit = {
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
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));

  }

 return (
  
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
        <img width={60} className="rounded-circle" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-10">
       <div>
            <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}> <TiDelete/> </i>
            <b>{tuit.userName}</b> <i className="verified-check" > <BsFillPatchCheckFill/> </i> {tuit.handle} . {tuit.time}
        </div>
       <div>{tuit.tuit}</div> <br></br>
       {TuitStats(tuit)}
       
     </div>
   </div>
  </li>
 );
};
export default TuitItem;