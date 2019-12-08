import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pets-unipe.herokuapp.com'
});

export default api;