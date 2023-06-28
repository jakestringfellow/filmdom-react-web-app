import React ,{ useState } from "react";
import { useNavigate } from "react-router";                     // to navigate to profile after registration
import { useDispatch } from "react-redux";                      // to invoke thunks
import { registerThunk } from "../tuiter/services/auth-thunks";           // to send login HTTP request to server

function RegisterScreen() {                                        
    const [username, setUsername] = useState("");               // to type username
    const [password, setPassword] = useState("");               // to type password
    const navigate = useNavigate();                             // to navigate to profile
    const dispatch = useDispatch();                             // to invoke thunks
    const handleRegister = async () => {                        // handles Register button click
        try {
            await dispatch(registerThunk({ username, password })); // send credentials to login controller
            navigate("/filmdom/profile");                               // if successful, navigate to profile
        } catch (e) {
            alert(e);                                           // if not show error
        }
    };
    return ( 
        <div>
            <h1> Register Screen </h1>                                                 
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
                    onClick={handleRegister}>
                Register
            </button>
        </div>
    );
}
export default RegisterScreen;