import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk } from "./services/auth-thunks";
// import { Navigate } from "react-router";

function ProtectedRoute({children}) {
    const [loading, setLoading] = useState(true);               // while loading, hide body content, show it when done
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {                                           // on component load
        const load = async () => {
            const { payload } = await dispatch(profileThunk()); // fetch profile from server 
            if (!payload) {                                     // if no one is logged in
                navigate("/login");                             // nav to login screen
            }
            setLoading(false);                                  // otherwise show body content
        };
        load();
    }, []);             
                                                                // show/hide body content while fetching profile
    return(<div className={`${loading ? "d-none" : ""}`}>            
        {children}
    </div>)

    // const { currentUser} = useSelector((state)=> state.user);
    // if (!currentUser) {
    //     return <Navigate to="/tuiter/login" />;
    // }
    // return children;
}

export default ProtectedRoute;