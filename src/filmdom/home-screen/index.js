import React, { useState, useEffect } from "react";
import "./home-screen.css";
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

  const fetchFollowedReviews = async () => {
    const reviews = await omdbService.findFollowedReviews();
    setFollowedReviews(reviews);
  }


  const [allReviews, setAllReviews] = useState([]);
  const [followedReviews, setFollowedReviews] = useState([])

  useEffect(() => {
    fetchAllReviews();
    currentUser && (
      fetchFollowedReviews()
    )
    
}, [currentUser]);


 return(
   <>
     <li className="home-header">Home</li>
     {currentUser && (
        <h3 className="filmdom-welcome">Welcome back, {currentUser.username}!</h3>
     )

     }
     <SearchScreen/>
    
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
                
                
                ))
            }
            
          </div>
          </>
        )}
      </div>
        
     )}
     {!currentUser && (
      <div>
        {allReviews && (
          <>
          <h3 className="following-header"> Recent Reviews: </h3>
          <div className="list-group">
            {
              allReviews && 
                allReviews.map((review) => (
                  <div>
                    <ReviewItem key={review.id} review={review}/>
                  
                
                  </div>
                ))
            }
            
          </div>
          </>
        )}

      </div>
      
     )}
   </>
 );
};
export default HomeScreen;