import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "./users-thunks";
import { useNavigate } from "react-router";
const LoginScreen = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk(user));
      navigate("/project/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Username"
        className="form-control"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        className="form-control"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
export default LoginScreen;
export const qwe = 123;
export const asd = 456;