// import Nav from "../nav";
import React from "react";
// Create links to navigate the site without page refreshes
import { Link } from "react-router-dom";
// Define routing paths and their corresponding components
import { Routes, Route } from "react-router";

// Import react components
import SearchScreen from "./header/search";
import DetailsScreen from "./details";
import NavigationSidebar from "./navigation-sidebar";
import LoginScreen from "./Login-screen.js";
import RegisterScreen from "./register-screen.js";
import ProfileScreen from "./profile-screen";
import HomeScreen from "./home-screen";
import "./filmdom.css";
import ProfilePublic from "./profile-public";
import Header from './header/header.js';
import ResultsScreen from "./results";


function Project() {
    return (
        <>
            <Header />
            {/* <div className="mt-2"> */}
                <div className="row">
                    <div className="col-2 navbar">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-9">
                        <Routes>
                            <Route path="home" element={<HomeScreen/>}/>
                            <Route path="search" element={<ResultsScreen/>}/>
                            <Route path="search/:query" element={<ResultsScreen/>}/>
                            <Route path="details/:id" element={<DetailsScreen/>}/>
                            <Route path="login" element={<LoginScreen/>}/>
                            <Route path="register" element={<RegisterScreen/>}/>
                            <Route path="profile" element={<ProfileScreen/>}/>
                            <Route path="profile/:profileId" element={<ProfilePublic/>}/>
                        </Routes>
                    </div>
                </div>
            {/* </div> */}
        </>
    
        
    )
}

export default Project;