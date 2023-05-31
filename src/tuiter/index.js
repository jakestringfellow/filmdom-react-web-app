import {Routes, Route} from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";


function Tuiter() {
 return (
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
       <div className="col-3">
            <WhoToFollowListItem/>
            <WhoToFollowListItem who={{
            userName: "Tesla",
            handle: "tesla",
            avatarIcon: "tesla.png" }} />
            <WhoToFollowListItem who={{
            userName: "SpaceX",
            handle: "spacex",
            avatarIcon: "spacex.png", }} />

       </div>
     </div>
   </div>
 );
}
export default Tuiter
