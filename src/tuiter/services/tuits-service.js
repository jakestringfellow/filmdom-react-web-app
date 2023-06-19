import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

//'https://tuiter-node-server-app-oshy.onrender.com/api/tuits'//'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API);    // send HTTP GET request to TUITS_API
    const tuits = response.data;                    // extract JSON array from response from server
    return tuits;                                   // return tuits
}

export const deleteTuit = async (tid) => {                      // send HTTP DELETE request to server
    const response = await axios.delete(`${TUITS_API}/${tid}`)  // append tuit's ID to URL
    return response.data                                        // data contains response's status we'll ignore
}                                                               // for now

export const updateTuit = async (tuit) => {         // service function accepts tuit to send server
    const response = await axios                    // send HTTP PUT request appending tuit's ID
        .put(`${TUITS_API}/${tuit._id}`, tuit);      // to URL, and embed tuit object in BODY
    return tuit;                                    // return tuit update to update in reducer's
}                                                   // state's store
