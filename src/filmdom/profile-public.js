import React, { useState, useEffect } from "react";
import * as service from "./omdb-service";
import { useParams } from "react-router-dom";
import ReviewItem from "./reviews/review-item";

function ProfilePublic() {

    const {profileId} = useParams();
    const [peopleThatFollowMe, setPeopleThatFollowMe] = useState();
    const [userReviews, setUserReviews] = useState();
    const handleFollow = async () => {
        try {
            await service.createFollow(profileId);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPeopleThatFollowMe = async () => {
        const people = await service.findFollowsByFollowed(profileId);
        setPeopleThatFollowMe(people);
    };

    const fetchUserReviews = async () => {
        const reviews = await service.findUserReviews(profileId);
        setUserReviews(reviews);
        
    }

    useEffect(() => {
        fetchPeopleThatFollowMe();
        fetchUserReviews();
    }, []);

    return (
        <div>
            <h1>Profile Public {profileId}</h1>
            <button onClick={handleFollow}>Follow</button>
                {peopleThatFollowMe && (
                    <div>
                        <h2> People that follow me</h2>
                        <div className="list-group">
                            {peopleThatFollowMe.map((person) => (
                                <div className="list-group-item">{person.follower.username}</div>
                            ))}
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