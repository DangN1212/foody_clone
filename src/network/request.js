import axios from 'axios';
import store from '../redux/store';
import { API_CODE, API_METHOD } from './constant';

export const DOMAIN = 'https://api.food.200lab.dev/';

const req = axios.create({
    baseURL: DOMAIN,
    timeout: 5000
});

req.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const setToken = token => {
    req.defaults.headers.common['Authorization'] = token
        ? `Bearer ${token}`
        : '';
};

export const callRequest = async (apiUrl, method, data = null) => {
    try {
        let res;
        if (method === API_METHOD.GET) {
            res = await req.get(apiUrl, data);
        } else if (method === API_METHOD.POST) {
            res = await req.post(apiUrl, data);
        } else if (method === API_METHOD.DELETE) {
            res = await req.delete(apiUrl, { data });
        }
        return res;
    } catch (error) {
        console.error('[API] - error', error);
    }
};

export default req;
