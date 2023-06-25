import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="list-group">
            <Link to='home' className="list-group-item list-group-item-action">Home</Link>
            <Link to="search" className="list-group-item list-group-item-action">Search</Link>
            <Link to="details" className="list-group-item list-group-item-action">Details</Link>
            <Link to="login" className="list-group-item list-group-item-action">Login</Link>
            <Link to="register" className="list-group-item list-group-item-action">Register</Link>
            <Link to="profile" className="list-group-item list-group-item-action">Profile</Link>
        </div>
    );
}

export default Navigation;