import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"
import "./navigation.css";
import {BiCameraMovie} from "react-icons/bi";
import LinkIcons from "./link-icons";


const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, filmdom, active] = pathname.split("/");
    const { currentUser } = useSelector((state) => state.users);
    const links = ["home",     "search",   "details", "login", "register",  "profile"];

    return (
        <div>
            <li>
                <i className="filmdom-header-icon"><BiCameraMovie/></i>
                <text className="filmdom-header d-none d-xl-inline">
                    FILMDOM
                </text>
            </li>
        
        <div className="list-group">
            <div className="row">
                {links.map((link) => 
                
                <NavLink to={`/filmdom/${link}`} style={({ isActive }) => ({
                    //color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#404040' : '#181818',
                  })} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
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

        </div>
        
    );
}

export default NavigationSidebar;