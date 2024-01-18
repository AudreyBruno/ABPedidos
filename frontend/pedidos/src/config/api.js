import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_PUBLIC_URL,
    auth: {
        username: process.env.REACT_APP_API_USER,
        password: process.env.REACT_APP_API_PASSWORD
    }
});

export default api;