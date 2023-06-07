import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";

const TuitList = () => {
    const { homeTuits } = useSelector(state => state.homeTuits)
 return(
   <ul className="list-group">
     {
       homeTuits.map(homeTuit =>
         <TuitItem
           key={homeTuit._id} homeTuit={homeTuit}/> )
     }
   </ul>
 );
};
export default TuitList;