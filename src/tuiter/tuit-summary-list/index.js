import React from "react";
import tuitsArray from './tuits.json';
import TuitSummaryItem
  from "./tuit-summary-item";

const TuitSummaryList = () => {
 return(
   <ul className="list-group">
     {
       tuitsArray.map(tuit =>
         <TuitSummaryItem
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};
export default TuitSummaryList;