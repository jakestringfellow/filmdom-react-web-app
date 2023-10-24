import axios from "axios";
//const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;                        // get the URL to the remote API
//const USERS_URL = `${SERVER_API_URL}/users`;                                        // URL to auth controller


//NEW
const USER_API = "https://limitless-cliffs-74232-2fe1c2ae109b.herokuapp.com/api/users";//"http://localhost:4000/api/users";
const BASE_API = "https://limitless-cliffs-74232-2fe1c2ae109b.herokuapp.com/api";//"http://localhost:4000";

const api = axios.create({ withCredentials: true });                                // configure axios to support cookies
                                                                                    // for passing credentials
export const login = async ( user) => {//{username, password }) => {                            // implement login service function
    const response = await api.post(`${USER_API}/login`, user);//{ username, password });
    //const user = response.data;
    return response.data;//user;
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
    const response = await api.post(`${USER_API}/profile`);//await api.post(`${USERS_URL}/profile`);
    console.log(response.data);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await api.put(`${USER_API}/${user._id}`, user);
    return response.data;
};

export const register = async (user) => {//{ username, password }) => {
    console.log(USER_API)
    const response = await api.post(`${USER_API}/register`, user)//{ username, password });
    const currentUser = response.data;
    return currentUser;
 }
