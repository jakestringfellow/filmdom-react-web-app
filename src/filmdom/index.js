import Nav from "../nav";
import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import SearchScreen from "./search";
import DetailsScreen from "./details";
import NavigationSidebar from "./navigation-sidebar";
import LoginScreen from "../tuiter/user/Login-screen.js";
import RegisterScreen from "../tuiter/user/register-screen.js";
import ProfileScreen from "../tuiter/profile-screen";
import HomeScreen from "./home-screen";
import "./filmdom.css";
import ProfilePublic from "./profile-public";
// import LoginScreen from "./login";
// import RegisterScreen from "./register";
// import ProfileScreen from "./profile";

function Project() {
    return (
    
        <div className="mt-2">
            <div className="row">
                <div className="col-3">
                    <NavigationSidebar/>
                </div>
                <div className="col-9">
                    <Routes>
                        <Route path="Home" element={<HomeScreen/>}/>
                        <Route path="search" element={<SearchScreen/>}/>
                        <Route path="search/:searchTerm" element={<SearchScreen/>}/>
                        <Route path="details/:id" element={<DetailsScreen/>}/>
                        <Route path="login" element={<LoginScreen/>}/>
                        <Route path="register" element={<RegisterScreen/>}/>
                        <Route path="profile" element={<ProfileScreen/>}/>
                        <Route path="profile/:profileId" element={<ProfilePublic/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Project;