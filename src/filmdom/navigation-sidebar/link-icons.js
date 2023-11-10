import React from "react";
import { ReactComponent as HomeIcon } from "./nav-icons/home-icon.svg";
import { ReactComponent as SearchIcon } from "./nav-icons/search-icon.svg";
import { ReactComponent as ProfileIcon } from "./nav-icons/profile-icon.svg";
import { ReactComponent as SettingsIcon } from "./nav-icons/settings-icon.svg";
import { ReactComponent as ReviewIcon } from "./nav-icons/review-icon.svg";
import "./navigation.css";



function LinkIcons(link) {
    if(link === "home") {
        return ( <span className="nav-icon"> <HomeIcon/> </span>);
    } 
    else if (link === "search") {
        return (<span className="nav-icon"> <SearchIcon /></span>);
    }
    else if (link === "login") {
        return (<span className="nav-icon"><ProfileIcon/></span>)
    }
    else if (link === "profile") {
        return (<span className="nav-icon"><ProfileIcon/></span>)
    }
    else if (link === "settings") {
        return (<span className="nav-icon"><SettingsIcon/></span>);
    }
    else if (link === "review") {
        return (<span className="nav-icon"><ReviewIcon/></span>);
    }
   };
export default LinkIcons;