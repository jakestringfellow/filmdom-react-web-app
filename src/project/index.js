import Nav from "../nav";
import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import SearchScreen from "./search";
import DetailsScreen from "./details";
import Navigation from "./navigation";
import LoginScreen from "../tuiter/user/Login-screen.js";
import RegisterScreen from "../tuiter/user/register-screen.js";
import ProfileScreen from "../tuiter/profile-screen";

function Project() {
    return (
        <div className="mt-2">
            <div className="row">
                <div className="col-3">
                    <Navigation/>
                </div>
                <div className="col-9">
                    <Routes>
                        <Route path="search" element={<SearchScreen/>}/>
                        <Route path="search/:searchTerm" element={<SearchScreen/>}/>
                        <Route path="details/:id" element={<DetailsScreen/>}/>
                        <Route path="login" element={<LoginScreen/>}/>
                        <Route path="register" element={<RegisterScreen/>}/>
                        <Route path="profile" element={<ProfileScreen/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Project;