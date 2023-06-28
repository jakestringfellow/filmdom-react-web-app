import React, { useState, useEffect } from "react";
import ReviewList from "../reviews/review-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./home-screen.css";
import SearchToReview from "./search-to-review";
import SearchScreen from "../search";
import { useSelector } from "react-redux";
import * as omdbService from "../omdb-service"
import ReviewItem from "../reviews/review-item";




function HomeScreen() {

  const { currentUser } = useSelector((state) => state.users);

  const fetchAllReviews = async () => {
    const reviews = await omdbService.findReviews();
    setAllReviews(reviews);
  }

  // const fetchFollowedReviews = async () => {
  //   const reviews = await omdbService.
  // }

  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetchAllReviews();

}, []);


 return(
   <>
     <li className="home-header">Home</li>
     <SearchScreen/>
     {/* <SearchToReview/> */}
     {/* <ReviewList/> */}
     {currentUser && (
        <h1>REVIEWS</h1>
     )}
     {!currentUser && (
      <div>
        <h1>ANON</h1>
        {allReviews && (
          <>
          <h3>Reviewed Movies: </h3>
          <div className="list-group">
            {
              allReviews && 
                allReviews.map((review) => (

                  <ReviewItem review={review}/>
                  // <Link to={`/filmdom/details/${review.movie.imdbId}`} className="list-group-item" key={review.movie._id}>
                  // <h4>{review.movie.title}</h4>

                  // <li>{review.review}</li>
                  // </Link>
                  
                ))
            }
            
          </div>
          </>
        )}

        <pre>{JSON.stringify(allReviews, null, 2)}</pre> 

      </div>
        

     )}
   </>
 );
};
export default HomeScreen;