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
        
        <div className="list-group navbar">
            <div className="row">
                {linksToDisplay.map((link) => 
                
                <NavLink to={`/filmdom/${link}`} style={({ isActive }) => ({
                    //color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? `var(--main-bg-color)` : 'var(--secondary-bg-color)',
                  })} className={`list-group-item filmdom-nav-link fd-nav-item text-capitalize ${active === link ? "active" : ""}`}>
                {LinkIcons(link)} {<span className="d-none d-xl-inline ">{link}</span>}
                </NavLink>
                )}
            </div>
            {/* <Link to='home' className="list-group-item list-group-item-action d-none d-xl-inline">Home</Link>
            <Link to="search" className="list-group-item list-group-item-action d-none d-xl-inline">Search</Link>
            <Link to="details" className="list-group-item list-group-item-action d-none d-xl-inline">Details</Link>
            <Link to="login" className="list-group-item list-group-item-action d-none d-xl-inline">Login</Link>
            <Link to="register" className="list-group-item list-group-item-action d-none d-xl-inline">Register</Link>
            <Link to="profile" className="list-group-item list-group-item-action d-none d-xl-inline">Profile</Link> */}
        </div>

        
        
    );
}

export default NavigationSidebar;