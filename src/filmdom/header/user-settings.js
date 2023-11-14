import React, { useState, useEffect } from 'react';
import { ReactComponent as CameraIcon } from './Filmdom-camera.svg';
import { ReactComponent as SearchIcon } from './search-icon.svg';
import './header.css';
import {Link, useParams, useNavigate } from "react-router-dom";
import * as service from "../omdb-service";
import { useSelector } from "react-redux";

function UserSettings () {
    const navigate = useNavigate();

	const { currentUser } = useSelector((state) => state.users);
    


    
	return (
		
			<div className="container">
				
				
				<div className="current-user">
					{currentUser && (
						<Link to="profile">
						<div className="row">
							{/* <div className="col-3">
								<img className="rounded-circle user-avatar" src="./example-profile-pic.webp"/>
							</div> */}
							<div className="col-3">
								<div className="row user-settings name">{currentUser.firstName}</div>
								<div className="row user-settings handle">@{currentUser.username}</div>		
							</div>
						</div>
						</Link>

					)}
					{!currentUser && (
						<Link to="login">
						<span className="user-settings anonymous">Sign in</span>
						</Link>
					)}
					
				</div>

			</div>
					
		
			
			
	)
}

export default UserSettings;