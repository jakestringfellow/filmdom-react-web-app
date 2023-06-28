import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import * as service from "../omdb-service.js";
import { useDispatch } from "react-redux";
import { BiDislike, BiLike } from "react-icons/bi";
import {Link} from "react-router-dom";
import "./review.css";


const ReviewStats = ({review}) => {

    const dispatch = useDispatch();

    const handleReviewLike = async () => {                           // handles like and dislike button click
        // if (tuit.liked === true) {
            // const success = await service.updateReview({...review, likes: review.likes - 1})
        // }
        // else {
             const success = await service.updateReview({...review, likes: review.likes + 1})

        // }
    }
    const handleReviewDislike = async () => {
        // if (tuit.liked === true) {
            const success = await service.updateReview({...review, dislikes: review.dislikes + 1})
        // }
        // else {
            // const success = await service.updateReview({...review, likes: review.dislikes - 1})

        // }
    }
    


    return (
        <div class = "container space-between">
          <Link onClick={handleReviewLike}>
            {
                // tuit.liked &&
                <li className="review-like"><BiLike/> <text className="likes">{review.likes}</text> </li>

            }
            {/* {
                !tuit.liked &&
                <li className="review-like"><BiLike/> <i className="likes">{review.likes}</i> </li>
                
            } */}
          </Link>
          <Link onClick={handleReviewDislike}>
            {
                // tuit.liked &&
                <li className="tuit-like"><BiDislike/> <text className="disikes">{review.dislikes}</text> </li>

            }
            {/* {
                !tuit.liked &&
                <li className="tuit-like"><BiSolidDislike/> <i className="dislikes">{review.dislikes}</i> </li>
                
            } */}
          </Link>
                     
          
       </div>
    );
}


export default ReviewStats;