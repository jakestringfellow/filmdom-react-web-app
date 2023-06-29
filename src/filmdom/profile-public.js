import React, { useState, useEffect } from "react";
import * as service from "./omdb-service";
import { useParams } from "react-router-dom";
import ReviewItem from "./reviews/review-item";
import "./profile.css";
import { Link } from "react-router-dom";


function ProfilePublic() {

    const {profileId} = useParams();
    const [peopleThatFollowMe, setPeopleThatFollowMe] = useState();
    const [userReviews, setUserReviews] = useState();
    const [profileUser, setProfileUser] = useState();
    const [peopleIFollow, setPeopleIFollow] = useState();

    const handleFollow = async () => {
        try {
            await service.createFollow(profileId);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchUser = async () => {

        const user = await service.getUserById(profileId);
        console.log("USER: ", user)
        setProfileUser(user);
    }

    const fetchPeopleThatFollowMe = async () => {
        const people = await service.findFollowsByFollowed(profileId);
        setPeopleThatFollowMe(people);
    };

    const fetchPeopleIFollow = async () => {
        const people = await service.findFollowsByFollower(profileId);
        setPeopleIFollow(people);
      }

    const fetchUserReviews = async () => {
        const reviews = await service.findUserReviews(profileId);
        setUserReviews(reviews);
        
    }

    useEffect(() => {
        fetchPeopleThatFollowMe();
        // fetchPeopleIFollow();

        fetchUserReviews();
        fetchUser();
    }, []);

    return (
        <div>
            {profileUser && (
                <div>
                <h1 className="public-profile-name-header">{profileUser.firstName}'s Profile</h1>
                <h1 className="public-profile-handle-header">@{profileUser.username}'s Profile</h1>
                </div>
            )}
            {/* <h1 className="public-profile-name-header">{profileUser.firstName}'s Profile</h1> */}
            {/* <h1 className="public-profile--header">@{profileUser.username}'s Profile</h1> */}

            <button className="btn btn-primary mt-2 login-button login-button" onClick={handleFollow}>Follow</button>
                
                {peopleThatFollowMe && (
                    <div>
                        <div className="col-4">
                      <div class="dropdown">
                          {/* <span>{peopleWhoFollowMe.length} Followers </span> */}
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{peopleThatFollowMe.length} Followers</button>
                          <div class="dropdown-content">
                          <div className="list-group">
                              {peopleThatFollowMe &&
                                peopleThatFollowMe.map((person) => (
                                  <Link
                                    to={`/filmdom/profile/${person._id}`}
                                    className="list-group-item"
                                    key={person._id}
                                  >
                                    <p className="profile-follow-link">{person.firstName} <br/> @{person.username}</p>
                                  </Link>
                                ))}
                            </div>
                      </div>
                </div>
              </div>
                    </div>
                )}

                {
                userReviews && 
                userReviews.map((review) => (

                  <ReviewItem review={review}/>
                  // <Link to={`/filmdom/details/${review.movie.imdbId}`} className="list-group-item" key={review.movie._id}>
                  // <h4>{review.movie.title}</h4>

                  // <li>{review.review}</li>
                  // </Link>
                  
                ))
            }








            
        </div>
    );
}

export default ProfilePublic;