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
import { Link } from "react-router-dom";





function HomeScreen() {

  const { currentUser } = useSelector((state) => state.users);

  const fetchAllReviews = async () => {
    const reviews = await omdbService.findReviews();
    setAllReviews(reviews);
  }

  const fetchFollowedReviews = async () => {
    const reviews = await omdbService.findFollowedReviews();
    setFollowedReviews(reviews);
  }

  // const fetchFollowedReviews = async () => {
  //   const reviews = await omdbService.
  // }

  const [allReviews, setAllReviews] = useState([]);
  const [followedReviews, setFollowedReviews] = useState([])

  useEffect(() => {
    fetchAllReviews();
    currentUser && (
      fetchFollowedReviews()
    )
      

}, []);


 return(
   <>
     <li className="home-header">Home</li>
     {currentUser && (
        <h3 className="filmdom-welcome">Welcome back, {currentUser.username}!</h3>
     )

     }
     <SearchScreen/>
     {/* <SearchToReview/> */}
     {/* <ReviewList/> */}
     {currentUser && (
      <div>
        {followedReviews && (
          <>
          <h3 className="following-header">Following: </h3>
          <div className="list-group">
            {
              followedReviews && 
                followedReviews.map((review) => (

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
      </div>

        
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
                  <div>
                    <ReviewItem review={review}/>
                  
                
                  </div>
                ))
            }
            
          </div>
          </>
        )}

        {/* <pre>{JSON.stringify(allReviews, null, 2)}</pre>  */}

      </div>
        

     )}
   </>
 );
};
export default HomeScreen;