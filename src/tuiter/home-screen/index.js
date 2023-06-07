import React from "react";
import TuitList from "../tuits/tuit-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
function HomeScreen() {
 return(
   <>
     <h2>Home</h2>
     
     <TuitList/>
   </>
 );
};
export default HomeScreen;