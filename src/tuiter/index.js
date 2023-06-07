import {Routes, Route} from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import homeTuitsReducer from "./reducers/home-tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, homeTuits: homeTuitsReducer }});



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
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/notifications" element={<h1>Notifications</h1>}/>
                        
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
