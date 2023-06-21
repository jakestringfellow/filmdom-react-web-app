import {Routes, Route} from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import homeTuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProfileScreen from "./profile-screen";
import LoginScreen from "./user/Login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import userReducer from "./reducers/auth-reducer";
import ProtectedRoute from "./protected-route";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, tuits: homeTuitsReducer,
                user: userReducer
            },
    });



function Tuiter() {
 return (
    <Provider store = {store}>

        <div>
            <Nav/>
            <div className="row">
                <div className="col-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-7">
                    <Routes>
                        <Route path="/home" element={<HomeScreen/>} />
                        <Route path="/explore" element={<ExploreScreen/>} />
                        <Route path="/bookmarks" element={<BookmarksScreen/>} />
                        <Route path="/profile" element={
                            // Protect from unregistered users
                            <ProtectedRoute>
                                <ProfileScreen />
                            </ProtectedRoute>
                        } />
                        <Route path="/notifications" element={<h1>Notifications</h1>}/>
                        <Route path="/login"    element={<LoginScreen    />} />
                        <Route path="/register" element={<RegisterScreen />} />
                        <Route path="/profile"  element={<ProfileScreen  />} />

                    </Routes>
                </div>
            <div className="col-3 d-none d-xl-block">
                    <WhoToFollowList/>

            </div>
            </div>
        </div>

    </Provider>
   
 );
}
export default Tuiter
