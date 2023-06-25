import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "./users-thunks";
import { useNavigate } from "react-router";
const RegisterScreen = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async () => {
    try {
      await dispatch(registerThunk(user));
      navigate("/project/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Register</h1>
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
      <button onClick={handleRegister} className="btn btn-primary">
        Register
      </button>
    </div>
  );
};
export default RegisterScreen;
export const qwe = 123;
export const asd = 456;