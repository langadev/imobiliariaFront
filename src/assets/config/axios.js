import axios from 'axios';

export const loginFetch = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token") ?? ""}`
    }
});
