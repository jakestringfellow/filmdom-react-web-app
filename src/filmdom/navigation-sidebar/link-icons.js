import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from "react-icons/fa";


function LinkIcons(link) {
    if(link === "home") {
        return (<i> <FaHome/>  </i>);
    } 
    else if (link === "explore") {
        return (<i> <FaHashtag/>  </i>);
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