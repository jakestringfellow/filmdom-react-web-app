import React from "react";
import { Link, useLocation } from "react-router-dom";
import LinkIcons from "./link-icons.js";
import "./navigation.css";
const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
 return (
   <div className="list-group">
     
     {links.map((link) => 
         <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
           {LinkIcons(link)} {<span className="d-none d-xl-block">{link}</span>}
         </Link>
     )}
   </div>
 );
};
export default NavigationSidebar;