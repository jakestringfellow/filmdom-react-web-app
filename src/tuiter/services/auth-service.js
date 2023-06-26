import axios from "axios";
//const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;                        // get the URL to the remote API
//const USERS_URL = `${SERVER_API_URL}/users`;                                        // URL to auth controller


//NEW
const USER_API = "http://localhost:4000/api/users";
const BASE_API = "http://localhost:4000";

const api = axios.create({ withCredentials: true });                                // configure axios to support cookies
                                                                                    // for passing credentials
export const login = async ({ username, password }) => {                            // implement login service function
    const response = await api.post(`${USER_API}/login`, { username, password });
    const user = response.data;
    return user;
};

export const getUsers = async () => {
    const response = await axios.get(USER_API);
    return response.data;
  };

export const logout = async () => {
    const response = await api.post(`${USER_API}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.get(`${USER_API}/profile`);//await api.post(`${USERS_URL}/profile`);
    return response;
};

export const updateUser = async (user) => {
    const response = await api.put(`${USER_API}/${user._id}`, user);
    return response.data;
};

export const register = async ({ username, password }) => {
    console.log(USER_API)
    const response = await api.post(`${USER_API}/register`, { username, password });
    const user = response.data;
    return user;
 }
