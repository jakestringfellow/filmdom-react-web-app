import React ,{ useState } from "react";
import { useNavigate } from "react-router";                     // to navigate to profile after login
import { useDispatch } from "react-redux";                      // to invoke thunks
import { loginThunk } from "../tuiter/services/auth-thunks";           // to send login HTTP request to server

function LoginScreen() {                                        
    const [username, setUsername] = useState({});               // to type username
    const [password, setPassword] = useState({});               // to type password

    // const [user, setUser] = useState({});   // new
 
    const navigate = useNavigate();                             // to navigate to profile
    const dispatch = useDispatch();                             // to invoke thunks
    const handleLogin = async () => {                           // handles Login button click
        try {
            await dispatch(loginThunk({ username, password })); // send credentials to login controller
            navigate("/filmdom/profile");                               // if successful, navigate to profile
        } catch (e) {
            console.error(e);                                           // if not show error
        }
    };
    return ( 
        <div>
            <h1 className="login-register-header"> Login Screen </h1>                                                 
            <div className="mt-2">
                <label className="auth-label">Username</label>
                <input className="form-control auth-field" type="text" placeholder="example-username99"
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="mt-2">
                <label className="auth-label">Password</label>
                <input className="form-control auth-field" type="password" placeholder="example-password123"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2 login-button"
                    onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
export default LoginScreen;