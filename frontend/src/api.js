import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Adjust to your Django API URL

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const register = async (userData) => {
    return await api.post('/register/', userData);
};

export const login = async (userData) => {
    return await api.post('/login/', userData);
};

export const getNotes = async (token) => {
    return await api.get('/notes/', {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const createNote = async (noteData, token) => {
    return await api.post('/notes/', noteData, {
        headers: { Authorization: `Bearer ${token}` }
    })
};