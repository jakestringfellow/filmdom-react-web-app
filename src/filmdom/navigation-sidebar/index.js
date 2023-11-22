import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"
import "./navigation.css";
import {BiCameraMovie} from "react-icons/bi";
import LinkIcons from "./link-icons";


const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, filmdom, active] = pathname.split("/");
    const { currentUser } = useSelector((state) => state.users);

    //const [navLinks, setLinks] = useState([]);

    // const setLinksForUser = async () => {
    //     const links = ["home", "search", "profile"];
    //     setLinks(links);
    //   }
    // const setLinksForAnon = async () => {
    //     const links = ["home",     "search",   "details", "login", "register"];
    //     setLinks(links);
    // }

    const authLinks = ["home", "search", "profile", "settings", "review"];
    const anonLinks = ["home", "search", "login", "settings", "review"];

    const linksToDisplay = currentUser ? authLinks : anonLinks;


    // useEffect(() => {
    //     currentUser && (
    //         setLinksForUser()
    //     )
    //     !currentUser && (
    //         setLinksForAnon()
    //     )
          
    // }, []);

    return (     
        
        <div className="navigation-sidebar list-group navbar">
            <div className="row">
                {linksToDisplay.map((link) => 
                
                <NavLink 
    to={`/filmdom/${link}`} 
    className={`list-group-item filmdom-nav-link fd-nav-item text-capitalize ${active === link ? "active" : "non-active"}`}>
    <span className="nav-icon">{LinkIcons(link)}</span>
    <span className="d-none d-xl-inline nav-text">{link}</span>
</NavLink>
                )}
            </div>
        </div>

        
        
    );
}

export default NavigationSidebar;