import React, {useState} from "react";
import { AiOutlinePicture, AiOutlineGif } from "react-icons/ai";
import { HiOutlineLocationMarker} from "react-icons/hi";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { BiBold, BiItalic } from "react-icons/bi";
import {useDispatch} from "react-redux";
import { createTuitThunk } from "../../tuiter/services/tuits-thunks";
import "./search-to-review.css";
import {FaUserSecret} from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";


const SearchToReview = () => {
 let [reviewSearch, setReviewSearch] = useState('');
 const dispatch = useDispatch();

 const tuitClickHandler = () => {
   const newTuit = {
    tuit: reviewSearch
  }
  dispatch(createTuitThunk(newTuit));

 }
 return (
   <div className="row">
     <div className="col-auto">
     <i className="user-icon"><FaUserSecret/></i>

       {/* <img src="/images/nasa.png" width={60}/> */}
       {/* <span className="user-icon" width={60}>{FaUserSecret}</span> */}
     </div>
     <div className="col-10">
       <textarea value={reviewSearch} placeholder="Search a title to review!"
               className="form-control border-0 mt-2"
               onChange={(event) => setReviewSearch(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Search
         </button>
         
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default SearchToReview;