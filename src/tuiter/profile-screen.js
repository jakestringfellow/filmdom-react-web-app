import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, updateUserThunk, logoutThunk } from "./services/auth-thunks";

function ProfileScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentUser } = useSelector((state) => state.users);
    const [ profile, setProfile ] = useState(currentUser);
    
    const save = async () => { await dispatch(updateUserThunk(profile)); };
    const handleLogout = () => {
      dispatch(logoutThunk());
      navigate("/filmdom/search");
    };

    useEffect(() => {
        const loadProfile = async () => {
          try {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
          } catch (error) {
            console.error(error);
            navigate("/filmdom/search");
          }
        };
        loadProfile();
    }, []);
    return (
        <div>
         <h1>Profile Screen</h1>
         {profile && (<div>
           <div>
            <label>Username</label>
            <input className="form-control" value={profile.username} readOnly />
            <label>Password</label>
            <input
              className="form-control"
              value={profile.password}
              type="password"
            />
            <label>First Name</label>
            <input
            className="form-control"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
            <label>Last Name</label>
          <input
            className="form-control"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
           </div></div>
         )}
         <button
          onClick={handleLogout}> Logout</button>
         <button onClick={save}>Save  </button>
        </div> ); 
}
export default ProfileScreen;