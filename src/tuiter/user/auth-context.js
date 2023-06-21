import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { profileThunk } from "../services/auth-thunks";

function AuthContext ({ children }) {                           // children is content in the body of this component
    const [loading, setLoading] = useState(true);               // to show/hide spinner or children. show spinner by default
    const dispatch = useDispatch();
    useEffect(() => {                                           // on component load
        const load = async () => {
            await dispatch(profileThunk());                     // fetch profile from server, store it in reducer
            setLoading(false);                                  // hide spinner, render body content
        };
        load();
    }, []);

    if (loading) {                                              // if loading hsow spinner (by default)
        return (
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        );
    } else {
        return children;                                        // Show the body when done loading
    }
}

export default AuthContext;