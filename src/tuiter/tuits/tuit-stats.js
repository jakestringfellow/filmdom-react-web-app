import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";
import TuitLiked from "./tuit-like-condition";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import {Link} from "react-router-dom";
import "./tuit.css";


const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();

    const handleTuitLike = () => {                           // handles like and unlike button click
        if (tuit.liked === true) {
            dispatch(updateTuitThunk({...tuit, liked: false, likes: tuit.likes - 1}))
        }
        else {
            dispatch(updateTuitThunk({...tuit, liked: true, likes: tuit.likes + 1}))

        }
    }
    


    return (
        <div class = "container space-between">
          <li> <FaRegComment/> {tuit.replies} </li>
          <li><FaRetweet/> {tuit.retuits} </li>
          <Link onClick={handleTuitLike}>
            {
                tuit.liked &&
                <li className="tuit-like"><HiHeart/> <i className="likes">{tuit.likes}</i> </li>

            }
            {
                !tuit.liked &&
                <li className="tuit-like"><HiOutlineHeart/> <i className="likes">{tuit.likes}</i> </li>
                
            }


          </Link>
                     
          
          <li> <RxShare2/> </li>
       </div>
    );
}


export default TuitStats;
