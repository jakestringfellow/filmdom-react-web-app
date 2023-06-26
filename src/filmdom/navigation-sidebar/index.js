import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import {BiCameraMovie} from "react-icons/bi";

function NavigationSidebar() {
    return (
        <div>
            <li>
                <i className="filmdom-header-icon"><BiCameraMovie/></i>
                <text className="filmdom-header d-none d-xl-inline">
                    FILMDOM
                </text>
            </li>
        
        <div className="list-group">
            <Link to='home' className="list-group-item list-group-item-action d-none d-xl-inline">Home</Link>
            <Link to="search" className="list-group-item list-group-item-action d-none d-xl-inline">Search</Link>
            <Link to="details" className="list-group-item list-group-item-action d-none d-xl-inline">Details</Link>
            <Link to="login" className="list-group-item list-group-item-action d-none d-xl-inline">Login</Link>
            <Link to="register" className="list-group-item list-group-item-action d-none d-xl-inline">Register</Link>
            <Link to="profile" className="list-group-item list-group-item-action d-none d-xl-inline">Profile</Link>
        </div>

        </div>
        
    );
}

export default NavigationSidebar;