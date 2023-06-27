import React from "react";
import ReviewList from "../reviews/review-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./home-screen.css";
import SearchToReview from "./search-to-review";
import SearchScreen from "../search";
function HomeScreen() {
 return(
   <>
     <li className="home-header">Home</li>
     <SearchScreen/>
     {/* <SearchToReview/> */}
     {/* <ReviewList/> */}
   </>
 );
};
export default HomeScreen;