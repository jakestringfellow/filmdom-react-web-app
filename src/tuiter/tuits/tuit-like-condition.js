import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


function TuitLiked(homeTuit) {

  const dispatch = useDispatch();


    if(homeTuit.liked) {
      return (<li> <i className="liked-tuit"> 
                <HiHeart onClick={() =>
                    dispatchEvent(updateTuitThunk({ ...homeTuit, likes: homeTuit.likes + 1 }))
                }/>  
              </i>{homeTuit.likes} </li>);
    } else {
      return (<li className="unliked-tuit"> <HiOutlineHeart/> {homeTuit.likes} </li>);
    }
   };
export default TuitLiked;