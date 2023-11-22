import React, { useState, useEffect } from "react";
import "./home-screen.css";
import { useSelector } from "react-redux";
import * as omdbService from "../omdb-service"
import ReviewItem from "../reviews/review-item";



function HomeScreen() {

  const { currentUser } = useSelector((state) => state.users);
  const [activeTab, setActiveTab] = useState('general');

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
      <div className="tabs-row">
        <div className="tabs">
            <button
              className={`tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() =>setActiveTab('general')}
            >
              General
            </button>

            {currentUser && (
              <button
                className={`tab ${activeTab === 'following' ? 'active' : ''}`}
                onClick={() =>setActiveTab('following')}
              >
                Following
              </button>
            )}
        </div>

      </div>
      
     {activeTab == 'general' && (
      <div>
        <h3 className="filmdom-welcome">
          Recent Reviews:
        </h3>
        <div className="list-group">
            {allReviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
      </div>
     )}    
     {activeTab === 'following' && currentUser && (
        <div>
          <h3 className="following-header">Following:</h3>
          <div className="list-group">
            {followedReviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}
     
   </>
 );
};
export default HomeScreen;