import React ,{ useState } from "react";
import { useNavigate } from "react-router";                     // to navigate to profile after registration
import { useDispatch } from "react-redux";                      // to invoke thunks
import { registerThunk } from "../tuiter/services/auth-thunks";           // to send login HTTP request to server
import "./login.css"

function RegisterScreen() {                                        
    const [username, setUsername] = useState("");               // to type username
    const [password, setPassword] = useState("");               // to type password
    const [role, setRole] = useState("");                       // to type role
    const navigate = useNavigate();                             // to navigate to profile
    const dispatch = useDispatch();                             // to invoke thunks
    const handleRegister = async () => {                        // handles Register button click
        try {
            await dispatch(registerThunk({ username, password, role })); // send credentials to login controller
            navigate("/filmdom/profile");                               // if successful, navigate to profile
        } catch (e) {
            alert(e);                                           // if not show error
        }
    };
    return ( 
        <div>
            <h1 className="login-register-header"> Register Screen </h1>                                                 
            <div className="mt-2">
                <label className="auth-label">Username</label>
                <input className="form-control auth-field" type="text" placeholder="example-username99" value={username}
                onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="mt-2">
                <label className="auth-label">Password</label>
                <input className="form-control auth-field" type="password" placeholder="example-password123" value={password}
                onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="mt-2">
                <label className="auth-label">Role</label>
                <input className="form-control auth-field" placeholder="'user' or 'admin'" type="text" value={role}
                onChange={(event) => setRole(event.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2 login-button"
                    onClick={handleRegister}>
                Register
            </button>
            
        </div>
    );
}
export default RegisterScreen;