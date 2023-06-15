import React ,{ useState } from "react";
import { useNavigate } from "react-router";                     // to navigate to profile after login
import { useDispatch } from "react-redux";                      // to invoke thunks
import { loginThunk } from "../services/auth-thunks";           // to send login HTTP request to server

function LoginScreen() {                                        
    const [username, setUsername] = useState("");               // to type username
    const [password, setPassword] = useState("");               // to type password
    const navigate = useNavigate();                             // to navigate to profile
    const dispatch = useDispatch();                             // to invoke thunks
    const handleLogin = async () => {                           // handles Login button click
        try {
            await dispatch(loginThunk({ username, password })); // send credentials to login controller
            navigate("/tuiter/profile");                               // if successful, navigate to profile
        } catch (e) {
            alert(e);                                           // if not show error
        }
    };
    return ( 
        <div>
            <h1> Login Screen </h1>                                                 
            <div className="mt-2">
                <label>Username</label>
                <input className="form-control" type="text" value={username}
                onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input className="form-control" type="password" value={password}
                onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2"
                    onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
export default LoginScreen;