import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.AXIOS_BASE_URL, 
});

export default instance;
