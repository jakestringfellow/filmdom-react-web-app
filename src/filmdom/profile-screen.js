import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { profileThunk, updateUserThunk, logoutThunk } from "../tuiter/services/auth-thunks";
import { current } from "@reduxjs/toolkit";
import * as omdbService from "./omdb-service.js";
import ReviewItem from "./reviews/review-item.js";
import "./profile.css";
import { RxDividerHorizontal } from "react-icons/rx";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


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

    const fetchPeopleIFollow = async () => {
      const people = await omdbService.findPeopleIFollow();
      setPeopleIFollow(people);
    }

    const fetchPeopleWhoFollowMe = async () => {
      const people = await omdbService.findPeopleWhoFollowMe();
      setPeopleWhoFollowMe(people);
    };

    const fetchMyReviews = async () => {
      const reviews = await omdbService.findMyReviews();
      setMyReviews(reviews);
    }

    async function findMovieById(id) {
      const movie = await omdbService.findMovieById(id);
      return (movie);
    }

    

    // const fetchReviewMovies = async () => {
    //   const reviewMovies = omdbService.findMovieById(id);
    // }

    // const findMovieById = async () => {
    //   const movie = await omdbService.findMovieById(id);
    // }

    const { currentUser } = useSelector((state) => state.users);
    const [ profile, setProfile ] = useState(currentUser);
    const [moviesILike, setMoviesILike] = useState([]);
    const [peopleIFollow, setPeopleIFollow] = useState([]);
    const [peopleWhoFollowMe, setPeopleWhoFollowMe] = useState([]);
    const [myReviews, setMyReviews] = useState([]);
    // const [reviewedMovies, setReviewedMovies] = useState([]);
    
    useEffect(() => {
        fetchPeopleWhoFollowMe();
        fetchPeopleIFollow();
        fetchMyReviews();

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
         <h1 className="login-register-header">Profile Screen</h1>
         {profile && (//<div>
            <> 
            <label className="auth-label">Username</label>
            <input className="form-control auth-field" value={profile.username || ""} readOnly />
            <label className="auth-label">Password</label>
            <input
              className="form-control auth-field"
              value={profile.password}
              type="password"
            />
            <label className="auth-label">First Name</label>
            <input
            className="form-control auth-field"
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
            <label className="auth-label">Last Name</label>
          <input
            className="form-control auth-field"
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
         <div className="row">
         <button onClick={handleLogout} className="btn logout-button"> 
          Logout
         </button>
         <button onClick={save} className="btn btn-primary save-button">
          Save  
         </button>
         </div>

         <hr/>

         <div className="row">
              <div className="col-4">
                  <div class="dropdown">
                          {/* <span>{peopleWhoFollowMe.length} Followers </span> */}
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{peopleIFollow.length} Following</button>
                          <div class="dropdown-content">
                          <div className="list-group">
                              {peopleIFollow &&
                                peopleIFollow.map((person) => (
                                  <Link
                                    to={`/filmdom/profile/${person._id}`}
                                    className="list-group-item"
                                    key={person._id}
                                  >
                                    <p className="profile-follow-link">{person.firstName} <br/> @{person.username}</p>
                                  </Link>
                                ))}
                            </div>
                      </div>
              </div>
            </div>
            
            <div className="col-4">
              <div className="col-4">
                      <div class="dropdown">
                          {/* <span>{peopleWhoFollowMe.length} Followers </span> */}
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{peopleWhoFollowMe.length} Followers</button>
                          <div class="dropdown-content">
                          <div className="list-group">
                              {peopleWhoFollowMe &&
                                peopleWhoFollowMe.map((person) => (
                                  <Link
                                    to={`/filmdom/profile/${person._id}`}
                                    className="list-group-item"
                                    key={person._id}
                                  >
                                    <p className="profile-follow-link">{person.firstName} <br/> @{person.username}</p>
                                  </Link>
                                ))}
                            </div>
                      </div>
                </div>
              </div>
            </div>
         </div>

         

         {/* {peopleWhoFollowMe && (
        <>
          <h3>People who follow me</h3>
          <div className="list-group">
            {peopleWhoFollowMe &&
              peopleWhoFollowMe.map((person) => (
                <Link
                  to={`/filmdom/profile/${person._id}`}
                  className="list-group-item"
                  key={person._id}
                >
                  <h4>{person.username}</h4>
                </Link>
              ))}
          </div>
        </>
      )} */}

        

      {/* {peopleIFollow && (
          <>
            <h3>People I follow</h3>
            <div className="list-group">
              {peopleIFollow &&
                peopleIFollow.map((person) => (
                  <Link
                    to={`/filmdom/profile/${person._id}`}
                    className="list-group-item"
                    key={person._id}
                  >
                    <h4>{person.username}</h4>
                  </Link>
                ))}
            </div>
          </>
        )} */}


        {moviesILike && (
          <>
         <h3 className="reviews-header">Favorite Movies: </h3>
         
         <div className="list-group">
            {moviesILike &&
              moviesILike.map((movie) => (
                <Link to={`/filmdom/details/${movie.imdbId}`} className="list-group-item" key={movie.id}>
                  <div className="row">
                    <div class="col-1">
                    <img width={50} className=" img-fluid filmdom-poster" src={movie.image}/>
                    </div>
                    
                    <div class="col-11">
                      <div class="row">
                        <p className="favorite-movie-title">{movie.title}</p>

                      </div>
                      <div class="row">
                        <p className="favorite-movie-genre">{movie.genre}</p>

                      </div>
                    </div>
                  </div>
                </Link>
              ))
            }
         </div>
         </>
        )}

        {myReviews && (
          <>
          <h3 className="reviews-header">Reviewed Movies: </h3>
          <div className="list-group">
            {
              myReviews && 
                myReviews.map((review) => (

                  <ReviewItem review={review}/>
                  // <Link to={`/filmdom/details/${review.movie.imdbId}`} className="list-group-item" key={review.movie._id}>
                  // <h4>{review.movie.title}</h4>

                  // <li>{review.review}</li>
                  // </Link>
                  
                ))
            }
            
          </div>
          </>
        )}
         {/* <pre>{JSON.stringify(myReviews, null, 2)}</pre> */}
         {/* <pre>{JSON.stringify(moviesILike, null, 2)}</pre> */}
        </div> 
    ); 
}
export default ProfileScreen;