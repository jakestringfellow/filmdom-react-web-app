import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;                        // get the URL to the remote API
const USERS_URL = `${SERVER_API_URL}/users`;                                        // URL to auth controller

const api = axios.create({ withCredentials: true });                                // configure axios to support cookies
                                                                                    // for passing credentials
export const login = async ({ username, password }) => {                            // implement login service function
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await request.get(`${USERS_URL}/profile`);//await api.post(`${USERS_URL}/profile`);
    return response;
};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};

export const register = async ({ username, password }) => {
    console.log(USERS_URL)
    const response = await api.post(`${USERS_URL}/register`, { username, password });
    const user = response.data;
    return user;
 }
