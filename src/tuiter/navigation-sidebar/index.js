import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LinkIcons from "./link-icons.js";
import "./navigation.css";
const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const { currentUser } = useSelector((state) => state.users);
 const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
 return (
   <div className="list-group">
     
     <div className="row">
        
            {links.map((link) => 
            
            <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
              {LinkIcons(link)} {<span className="d-none d-xl-inline ">{link}</span>}
            </Link>
            )}
        
        
     </div>
     {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
     {!currentUser && <Link className="list-group" to="/tuiter/register">   Register   </Link>}
     { currentUser && <Link className="list-group" to="/tuiter/profile">   Profile   </Link>}

   </div>
 );
};
export default NavigationSidebar;