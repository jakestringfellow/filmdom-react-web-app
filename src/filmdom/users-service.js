import axios from "axios";
//const SERVER = "https://tuiter-node-server-app-su1-23.onrender.com";
const SERVER = "https://tuiter-node-server-app-oshy.onrender.com";
// const USER_API = `${SERVER}/users`;
const USER_API = "http://localhost:4000/api/users";
const BASE_API = "http://localhost:4000"; //process.env.BASE_API; //`${SERVER}/api`;

const request = axios.create({
  withCredentials: true,
});

export const login = async (user) => {
  const response = await request.post(`${BASE_API}/api/users/login`, user);
  return response.data;
};

export const register = async (user) => {
  const response = await request.post(`${BASE_API}/api/users/register`, user);
  return response.data;
};

export const logout = async () => {
  const response = await request.post(`${BASE_API}/api/users/logout`);
  return response.data;
};

export const getProfile = async () => {
  const response = await request.get(`${BASE_API}/api/users/profile`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(USER_API);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USER_API, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${USER_API}/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`${USER_API}/${id}`, user);
  return response.data;
};