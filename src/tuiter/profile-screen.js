import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, updateUserThunk, logoutThunk } from "./services/auth-thunks";
import { current } from "@reduxjs/toolkit";
import * as omdbService from "../filmdom/omdb-service.js";

function ProfileScreen() {

    const dispatch = useDispatch();
    const navigate = useNavigate();





    const handleLogout = () => {
      dispatch(logoutThunk());
      navigate("/filmdom/search");
    };
    
    const save = async () => { 
      try {
        await dispatch(updateUserThunk(profile));
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMyLikes = async () => {
      const movies = await omdbService.findMoviesILike();
      setMoviesILike(movies);
    };

    const { currentUser } = useSelector((state) => state.users);
    const [ profile, setProfile ] = useState(currentUser);
    const [moviesILike, setMoviesILike] = useState([]);

    useEffect(() => {
        fetchMyLikes();
        const loadProfile = async () => {
          //try {
            console.log(currentUser);
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
          //} catch (error) {
            //console.error(error);
            //navigate("/filmdom/search");
          //}
        };
        loadProfile();
    }, []);
    return (
        <div>
         <h1>Profile Screen</h1>
         {profile && (//<div>
            <> 
            <label>Username</label>
            <input className="form-control" value={profile.username || ""} readOnly />
            <label>Password</label>
            <input
              className="form-control"
              value={profile.password}
              type="password"
            />
            <label>First Name</label>
            <input
            className="form-control"
            type="text"
            value={profile.firstName}
            onChange={(event) => {
              const newProfile = {
                ...profile,
                firstName: event.target.value,
              };
              setProfile(newProfile);
            }
              //setProfile({ ...profile, firstName: event.target.value })
            }
          />
            <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            value={profile.lastName || ""}
            onChange={(event) => {
              const newProfile = {
                ...profile,
                lastName: event.target.value,
              };
              setProfile(newProfile);
            }
              //setProfile({ ...profile, lastName: e.target.value })
            }
          />
          </>
           //</div></div>
         )}
         <button onClick={handleLogout} className="btn btn-danger"> 
          Logout
         </button>
         <button onClick={save} className="btn btn-primary">
          Save  
         </button>
         <pre>{JSON.stringify(moviesILike, null, 2)}</pre>
        </div> 
    ); 
}
export default ProfileScreen;