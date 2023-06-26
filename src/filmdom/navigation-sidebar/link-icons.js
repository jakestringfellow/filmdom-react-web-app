import { FaHome, FaSearch, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

function LinkIcons(link) {
    if(link === "home") {
        return (<i> <AiFillHome/>  </i>);
    } 
    else if (link === "search") {
        return (<i> <FaSearch/>  </i>);
    }
    else if (link === "notifications") {
        return (<i> <FaBell/>  </i>);
    }
    else if (link === "messages") {
        return (<i> <FaEnvelope/>  </i>);
    }
    else if (link === "bookmarks") {
        return (<i> <FaBookmark/>  </i>);
    }
    else if (link === "lists") {
        return (<i> <FaList/>  </i>);
    }
    else if (link === "profile") {
        return (<i> <FaUser/>  </i>);
    }
    else if (link === "more") {
        return (<i> <FaEllipsisH/>  </i>);
    }
   };
export default LinkIcons;