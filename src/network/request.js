import axios from 'axios';
import store from '../redux/store';

export const DOMAIN = 'https://api.food.200lab.dev/';

const req = axios.create({
    baseURL: DOMAIN,
    timeout: 5000
});

req.interceptors.request.use(
    function (config) {
        const token = store.getState().auth.token;
        req.defaults.headers.common['Authorization'] = token;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default req;
