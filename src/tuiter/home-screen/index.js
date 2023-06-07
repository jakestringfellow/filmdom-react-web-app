import React from "react";
import TuitList from "../tuits/tuit-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
import WhatsHappening from "../whats-happening";
function HomeScreen() {
 return(
   <>
     <h2>Home</h2>
     <WhatsHappening/>
     <TuitList/>
   </>
 );
};
export default HomeScreen;